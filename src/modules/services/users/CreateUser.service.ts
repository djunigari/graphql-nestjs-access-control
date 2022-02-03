import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { User } from '../../models/user.entity';
import { BaseUserService } from './BaseUser.service';

interface ICreateUserDto {
  username: string;
  password: string;
}

@Injectable()
export class CreateUserService extends BaseUserService {
  async execute({ username, password }: ICreateUserDto): Promise<User | Error> {
    if (await this.repo().findOne({ username })) {
      return new Error('User already exists');
    }
    const passwordHash = await hash(password, 8);

    const user = this.repo().create({ username, password: passwordHash });

    await this.repo().save(user);

    return user;
  }
}
