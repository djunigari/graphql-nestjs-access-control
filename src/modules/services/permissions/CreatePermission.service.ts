import { Injectable } from '@nestjs/common';
import { Action } from 'src/modules/models/actions.enum';
import { Subject } from 'src/modules/models/subjects.enum';
import { Permission } from '../../models/permission.entity';
import { BasePermissionService } from './BasePermission.service';

interface ICreatePermissionDto {
  action: Action;
  subject: Subject;
}

@Injectable()
export class CreatePermissionService extends BasePermissionService {
  async execute({
    action,
    subject,
  }: ICreatePermissionDto): Promise<Permission | Error> {
    if (await this.repo().findOne({ action, subject })) {
      return new Error('Permission already exists');
    }
    console.log(subject);
    const permission = this.repo().create({ action, subject });

    await this.repo().save(permission);

    return permission;
  }
}
