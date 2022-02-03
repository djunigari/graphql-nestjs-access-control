import { Injectable } from '@nestjs/common';
import { BaseUserService } from './BaseUser.service';

@Injectable()
export class FindAllRolesOfUserByIdService extends BaseUserService {
  async execute(id: string) {
    const result = await this.repo().findOne({
      where: { id },
      relations: ['roles'],
    });

    return result.roles;
  }
}
