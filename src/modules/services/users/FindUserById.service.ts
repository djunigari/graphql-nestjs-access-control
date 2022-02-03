import { Injectable } from '@nestjs/common';
import { BaseUserService } from './BaseUser.service';

@Injectable()
export class FindUserByIdService extends BaseUserService {
  async execute(id: string) {
    return this.repo().findOne(id);
  }
}
