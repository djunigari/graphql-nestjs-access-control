import { Injectable } from '@nestjs/common';
import { BaseRoleService } from './BaseRole.service';

@Injectable()
export class FindAllPermissionsOfRoleByIdService extends BaseRoleService {
  async execute(id: string) {
    const result = await this.repo().findOne({
      where: { id },
      relations: ['permissions'],
    });
    return result.permissions;
  }
}
