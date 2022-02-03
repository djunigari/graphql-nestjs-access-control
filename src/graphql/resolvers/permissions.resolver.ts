import { Resolver, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Permission } from 'src/modules/models/permission.entity';
import { FindPermissionByIdService } from 'src/modules/services/permissions/FindPermissionById.service';
import { FindAllPermissionsService } from 'src/modules/services/permissions/FindAllPermissions.service';

@Resolver((of) => Permission)
export class PermissionResolver {
  constructor(
    @Inject(FindPermissionByIdService)
    private findPermissionById: FindPermissionByIdService,
    @Inject(FindAllPermissionsService)
    private findAllPermissions: FindAllPermissionsService,
  ) {}

  @Query((returns) => Permission)
  permission(@Args('id') id: string) {
    return this.findPermissionById.execute(id);
  }

  @Query((returns) => [Permission])
  permissions() {
    return this.findAllPermissions.execute();
  }
}
