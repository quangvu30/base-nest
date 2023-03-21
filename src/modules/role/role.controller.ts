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

import { RoleService } from '@/modules/role/role.service';
import { CreateRole } from './dto/createRole.dto';
import { ResponseStruct } from '@/utils/response';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('/create-role')
  async createGroupRole(
    @Body() createRoleDto: CreateRole,
    @Res() res: Response,
  ) {
    try {
      const role = await this.roleService.createRole(createRoleDto);
      if (_.isError(role)) {
        throw new BadRequestException(role);
      }
      return res
        .status(HttpStatus.CREATED)
        .json(ResponseStruct.responseStruct(1, role));
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
