import {
  Controller,
  Body,
  Post,
  Res,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import * as _ from 'lodash';

import { ResponseStruct } from '@/utils/response';
import { UserService } from './user.service';
import { CreateUser } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create-user')
  async createGroupRole(
    @Body() createUserDto: CreateUser,
    @Res() res: Response,
  ) {
    try {
      const user = await this.userService.createUser(createUserDto);
      if (_.isError(user)) {
        throw new BadRequestException(user);
      }
      return res
        .status(HttpStatus.CREATED)
        .json(ResponseStruct.responseStruct(1, user));
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
