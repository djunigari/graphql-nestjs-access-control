import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NewUserInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
