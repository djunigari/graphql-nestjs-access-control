import { Injectable } from '@nestjs/common';
import { BasePermissionService } from './BasePermission.service';

@Injectable()
export class FindAllPermissionsService extends BasePermissionService {
  async execute() {
    return this.repo().find();
  }
}
