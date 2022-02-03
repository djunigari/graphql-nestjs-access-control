import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.entity';
import { BaseUserService } from './BaseUser.service';

@Injectable()
export class FindAllUsersService extends BaseUserService {
  async execute(): Promise<User[]> {
    return this.repo().find();
  }
}
