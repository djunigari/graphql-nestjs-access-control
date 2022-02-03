import { User } from 'src/modules/models/user.entity';
import { Ability } from '@casl/ability';

interface IPolicyHandler {
  handle(ability: Ability, user: User): boolean;
}

type PolicyHandlerCallback = (ability: Ability, user: User) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;
