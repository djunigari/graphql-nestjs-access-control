import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserDataInput {
  @Field()
  username: string;

  @Field({ nullable: true })
  password?: string;
}
