import { Field, ObjectType } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';
import { Permission } from 'src/modules/models/permission.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';

@ObjectType()
@Entity('roles')
export class Role {
  constructor(attrs?) {
    if (attrs) {
      Object.assign(this, attrs);
    } else {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }

  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field((type) => [Permission])
  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'permissions_roles',
    joinColumns: [{ name: 'role_id' }],
    inverseJoinColumns: [{ name: 'permission_id' }],
  })
  permissions: Permission[];
}
