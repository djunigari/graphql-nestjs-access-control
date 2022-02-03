import { Field, ObjectType } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';
import { Role } from 'src/modules/models/role.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';

@ObjectType()
@Entity('users')
export class User {
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
  username: string;

  @Field()
  @Column()
  password: string;

  @Field((type) => [Role])
  @ManyToMany(() => Role)
  @JoinTable({
    name: 'users_roles',
    joinColumns: [{ name: 'user_id' }],
    inverseJoinColumns: [{ name: 'role_id' }],
  })
  roles: Role[];
}
