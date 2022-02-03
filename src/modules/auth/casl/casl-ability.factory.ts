import { Ability, defineAbility } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Action } from 'src/modules/models/actions.enum';
import { User } from 'src/modules/models/user.entity';
import { FindAllPermissionsOfUserByIdService } from 'src/modules/services/users/FindAllPermissionsOfUserById.service';

export type PermissionObjectType = any;

@Injectable()
export class CaslAbilityFactory {
  constructor(
    private readonly findAllUserPermissions: FindAllPermissionsOfUserByIdService,
  ) {}
  async createForUser(user: User): Promise<Ability> {
    const permissions = await this.findAllUserPermissions.execute(user.id);
    return defineAbility((can) => {
      //fix later to use database with field conditions
      can(Action.READ, 'User', { id: user.id });
      permissions.map((permission) =>
        can(permission.action, permission.subject),
      );
    });
  }
}
