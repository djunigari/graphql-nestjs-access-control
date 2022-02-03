import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/modules/models/role.entity';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';

@Injectable()
export class BaseUserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}
  repo(): Repository<User> {
    return this.repository;
  }

  roleRepo(): Repository<Role> {
    return this.rolesRepository;
  }
}
