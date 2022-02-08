import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './models/permission.entity';
import { Role } from './models/role.entity';
import { User } from './models/user.entity';
import { FindAllPermissionsService } from './services/permissions/FindAllPermissions.service';
import { FindPermissionByIdService } from './services/permissions/FindPermissionById.service';
import { BaseRoleService } from './services/roles/BaseRole.service';
import { CreateRoleService } from './services/roles/CreateRole.service';
import { DeleteRoleService } from './services/roles/DeleteRole.service';
import { FindAllPermissionsByRoleNamesService } from './services/roles/FindAllPermissionsByRoleNames.service';
import { FindAllPermissionsOfRoleByIdService } from './services/roles/FindAllPermissionsOfRoleById.service';
import { FindAllRolesService } from './services/roles/FindAllRole.service';
import { FindRoleByIdService } from './services/roles/FindRoleById.service';
import { SetRolePermissionsService } from './services/roles/SetRolePermissions.service';
import { UpdateRoleService } from './services/roles/UpdateRole.service';
import { CreateUserService } from './services/users/CreateUser.service';
import { FindAllRolesOfUserByIdService } from './services/users/FindAllRolesOfUserById.service';
import { FindAllUsersService } from './services/users/FindAllUsers.service';
import { FindUserByIdService } from './services/users/FindUserById.service';
import { UpdateUserService } from './services/users/UpdateUser.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, Role, User])],
  providers: [
    BaseRoleService,
    CreateRoleService,
    SetRolePermissionsService,
    DeleteRoleService,
    UpdateRoleService,
    FindAllRolesService,
    FindRoleByIdService,
    FindAllPermissionsByRoleNamesService,
    FindPermissionByIdService,
    FindAllPermissionsService,
    FindAllPermissionsOfRoleByIdService,
    FindUserByIdService,
    FindAllRolesOfUserByIdService,
    CreateUserService,
    FindAllUsersService,
    UpdateUserService,
  ],
  exports: [
    TypeOrmModule,
    FindPermissionByIdService,
    FindAllPermissionsService,
    FindRoleByIdService,
    FindAllRolesService,
    FindAllPermissionsOfRoleByIdService,
    FindUserByIdService,
    FindAllRolesOfUserByIdService,
    CreateUserService,
    FindAllUsersService,
    UpdateUserService,
  ],
})
export class ServerModule {}
