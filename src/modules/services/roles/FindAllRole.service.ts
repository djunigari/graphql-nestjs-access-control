import { Injectable } from '@nestjs/common';
import { BaseRoleService } from './BaseRole.service';

@Injectable()
export class FindAllRolesService extends BaseRoleService {
  execute() {
    return this.repo().find();
  }
}
