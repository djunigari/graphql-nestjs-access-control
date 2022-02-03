import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { BasePermissionService } from './BasePermission.service';

@Injectable()
export class DeletePermissionService extends BasePermissionService {
  async execute(id: string): Promise<DeleteResult | Error> {
    return await this.repo().delete(id);
  }
}
