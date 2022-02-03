import { Field, ObjectType } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { Action } from './actions.enum';
import { Subject } from './subjects.enum';

@ObjectType()
@Entity('permissions')
export class Permission {
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
  @Column({
    type: 'enum',
    enum: Action,
  })
  action: Action;

  @Field()
  @Column({
    type: 'enum',
    enum: Subject,
  })
  subject: Subject;

  @Field()
  @Column()
  condition: string;
}
