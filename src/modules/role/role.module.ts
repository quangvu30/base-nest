import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Role, RoleSchema } from '@/schema/models/role.model';
import { RoleRepository } from '@/schema/repository/role.repo';
import { GroupRoleModule } from '@/modules/groupRole/groupRole.module';
import { GroupRoleService } from '@/modules/groupRole/groupRole.service';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
    GroupRoleModule,
  ],
  controllers: [RoleController],
  providers: [GroupRoleService, RoleRepository, RoleService],
  exports: [RoleService, RoleRepository],
})
export class RoleModule {}
