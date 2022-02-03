import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from 'src/modules/models/user.entity';
import { CreateUserService } from 'src/modules/services/users/CreateUser.service';
import { FindAllRolesOfUserByIdService } from 'src/modules/services/users/FindAllRolesOfUserById.service';
import { FindAllUsersService } from 'src/modules/services/users/FindAllUsers.service';
import { FindUserByIdService } from 'src/modules/services/users/FindUserById.service';
import { NewUserInput } from '../dto/new-user.input';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private findUserById: FindUserByIdService,
    private findAllRolesOfUserById: FindAllRolesOfUserByIdService,
    private findAllUsers: FindAllUsersService,
    private createUser: CreateUserService,
  ) {}
  @Mutation((returns) => User)
  newUser(@Args('newUserData') { username, password }: NewUserInput) {
    return this.createUser.execute({ username, password });
  }

  @Query((returns) => User)
  user(@Args('id', { type: () => ID }) id: string) {
    return this.findUserById.execute(id);
  }

  @Query((returns) => [User])
  users() {
    return this.findAllUsers.execute();
  }

  @ResolveField()
  roles(@Parent() user: User) {
    const { id } = user;
    return this.findAllRolesOfUserById.execute(id);
  }
}
