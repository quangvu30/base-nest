import { User, UserSchema } from '@/schema/models/user.model';
import { UserRepository } from '@/schema/repository/user.repo';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupRoleModule } from '../groupRole/groupRole.module';
import { GroupRoleService } from '../groupRole/groupRole.service';
import { RoleModule } from '../role/role.module';
import { RoleService } from '../role/role.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    RoleModule,
    GroupRoleModule,
  ],
  controllers: [UserController],
  providers: [GroupRoleService, RoleService, UserRepository, UserService],
  exports: [UserRepository, UserService],
})
export class UserModule {}
