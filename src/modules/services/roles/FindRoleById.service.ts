import { Injectable } from '@nestjs/common';
import { Role } from '../../models/role.entity';
import { BaseRoleService } from './BaseRole.service';

@Injectable()
export class FindRoleByIdService extends BaseRoleService {
  execute(id: string) {
    return this.repo().findOne(id);
  }
}
