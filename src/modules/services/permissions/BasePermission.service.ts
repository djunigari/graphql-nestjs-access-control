import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/modules/models/role.entity';
import { Repository } from 'typeorm';
import { Permission } from '../../models/permission.entity';

@Injectable()
export class BasePermissionService {
  constructor(
    @InjectRepository(Permission)
    private repository: Repository<Permission>,
  ) {}
  repo(): Repository<Permission> {
    return this.repository;
  }
}
