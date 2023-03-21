import { Injectable } from '@nestjs/common';
import { ClientSession, Schema as MongooseSchema } from 'mongoose';
import * as _ from 'lodash';
import * as bcrypt from 'bcryptjs';

import { UserRepository } from '@/schema/repository/user.repo';
import { CreateUser } from './dto/createUser.dto';
import { RoleService } from '../role/role.service';
import { Role } from '@/constants/role';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private roleService: RoleService,
  ) {}

  async createUser(createUserDto: CreateUser) {
    const userRole = await this.roleService.getRoleByName(Role.USER);
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    if (_.isError(userRole)) {
      const user = await this.userRepository.createUser({
        ...createUserDto,
        password: hashedPassword,
        birthday: new Date(createUserDto.birthday),
        role: [],
      });
      return user;
    }
    const user = await this.userRepository.createUser({
      ...createUserDto,
      password: hashedPassword,
      birthday: new Date(createUserDto.birthday),
      role: [userRole],
    });
    return user;
  }
}
