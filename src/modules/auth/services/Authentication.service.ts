import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { User } from '../../models/user.entity';
import { BaseUserService } from '../../services/users/BaseUser.service';

@Injectable()
export class AuthenticationService extends BaseUserService {
  async execute(username: string, password: string): Promise<User | Error> {
    const user = await this.repo().findOne({
      where: { username },
      relations: ['roles'],
    });

    if (user && (await compare(password, user.password))) {
      delete user.password;
      return user;
    } else {
      return new Error('User or Password invalid');
    }
  }
}
