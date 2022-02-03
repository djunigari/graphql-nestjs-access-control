import { Injectable } from '@nestjs/common';
import { Action } from 'src/modules/models/actions.enum';
import { Subject } from 'src/modules/models/subjects.enum';
import { Permission } from '../../models/permission.entity';
import { BasePermissionService } from './BasePermission.service';

interface IUpdatePermissionDto {
  action: Action;
  subject: Subject;
}

@Injectable()
export class UpdatePermissionService extends BasePermissionService {
  async execute(
    permissionId: string,
    { action, subject }: IUpdatePermissionDto,
  ): Promise<Permission | Error> {
    const permission = await this.repo().findOne(permissionId);

    if (!permission) {
      return new Error('Permission not exists');
    }

    return await this.repo().save({
      id: permissionId,
      action,
      subject,
    });
  }
}
