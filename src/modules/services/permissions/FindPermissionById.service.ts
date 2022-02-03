import { Injectable } from '@nestjs/common';
import { BasePermissionService } from './BasePermission.service';

@Injectable()
export class FindPermissionByIdService extends BasePermissionService {
  async execute(id: string) {
    return this.repo().findOne(id);
  }
}
