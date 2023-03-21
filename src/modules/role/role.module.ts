import { GroupRole, GroupRoleSchema } from '@/schema/models/groupRole.model';
import { RoleRepository } from '@/schema/repository/role.repo';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupRoleService } from '../groupRole/groupRole.service';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroupRole.name, schema: GroupRoleSchema },
    ]),
  ],
  controllers: [RoleController],
  providers: [GroupRoleService, RoleService, RoleRepository],
  exports: [RoleService],
})
export class RoleModule {}
