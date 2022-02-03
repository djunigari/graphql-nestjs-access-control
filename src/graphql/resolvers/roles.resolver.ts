import { Inject } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Permission } from 'src/modules/models/permission.entity';
import { Role } from 'src/modules/models/role.entity';
import { FindAllPermissionsOfRoleByIdService } from 'src/modules/services/roles/FindAllPermissionsOfRoleById.service';
import { FindAllRolesService } from 'src/modules/services/roles/FindAllRole.service';
import { FindRoleByIdService } from 'src/modules/services/roles/FindRoleById.service';

@Resolver((of) => Role)
export class RoleResolver {
  constructor(
    @Inject(FindRoleByIdService) private findRoleById: FindRoleByIdService,
    @Inject(FindAllRolesService) private findAllRoles: FindAllRolesService,
    @Inject(FindAllPermissionsOfRoleByIdService)
    private findAllPermissionsOfRoleById: FindAllPermissionsOfRoleByIdService,
  ) {}

  @Query((returns) => Role)
  role(@Args('id') id: string) {
    return this.findRoleById.execute(id);
  }

  @Query((returns) => [Role])
  roles() {
    return this.findAllRoles.execute();
  }

  @ResolveField()
  permissions(@Parent() role: Role) {
    const { id } = role;
    return this.findAllPermissionsOfRoleById.execute(id);
  }
}
