import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.entity';
import { BaseUserService } from './BaseUser.service';

interface IUpdateUserDto {
  username: string;
  password: string;
}

@Injectable()
export class UpdateUserService extends BaseUserService {
  async execute(userId: string, { username, password }: IUpdateUserDto) {
    const user = await this.repo().findOne(userId);

    if (!User) {
      return new Error('User not exists');
    }
    if (username) user.username = username;
    if (password) user.password = password;

    return this.repo().save(user);
  }
}
