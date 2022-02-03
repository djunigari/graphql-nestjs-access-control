import { Module } from '@nestjs/common';
import { ServerModule } from 'src/modules/server.module';
import { PermissionResolver } from './resolvers/permissions.resolver';
import { RoleResolver } from './resolvers/roles.resolver';
import { UserResolver } from './resolvers/users.resolver';

@Module({
  imports: [ServerModule],
  providers: [PermissionResolver, RoleResolver, UserResolver],
  exports: [],
})
export class GraphqlModule {}
