import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.entity';
import { BaseUserService } from './BaseUser.service';

interface IUpdateUserDto {
  username: string;
  password: string;
}

@Injectable()
export class UpdateUserService extends BaseUserService {
  async execute(
    userId: string,
    { username, password }: IUpdateUserDto,
  ): Promise<User | Error> {
    const User = await this.repo().findOne(userId);

    if (!User) {
      return new Error('User not exists');
    }

    return await this.repo().save({
      id: userId,
      username,
      password,
    });
  }
}
