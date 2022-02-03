import { Injectable } from '@nestjs/common';
import { Role } from '../../models/role.entity';
import { BaseRoleService } from './BaseRole.service';

interface IUpdateRoleDto {
  name: string;
  description: string;
}

@Injectable()
export class UpdateRoleService extends BaseRoleService {
  async execute(
    roleId: string,
    { name, description }: IUpdateRoleDto,
  ): Promise<Role | Error> {
    const role = await this.repo().findOne(roleId);

    if (!role) {
      return new Error('Role not exists');
    }

    return await this.repo().save({
      id: roleId,
      name,
      description,
    });
  }
}
