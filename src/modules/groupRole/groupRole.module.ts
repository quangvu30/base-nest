import { GroupRole, GroupRoleSchema } from '@/schema/models/groupRole.model';
import { GroupRoleRepository } from '@/schema/repository/groupRole.repo';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupRoleController } from './groupRole.controller';
import { GroupRoleService } from './groupRole.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroupRole.name, schema: GroupRoleSchema },
    ]),
  ],
  controllers: [GroupRoleController],
  providers: [GroupRoleService, GroupRoleRepository],
  exports: [GroupRoleService, GroupRoleRepository],
})
export class GroupRoleModule {}
