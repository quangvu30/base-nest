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

import { GroupRoleService } from '@/modules/groupRole/groupRole.service';
import { CreateGroupRole } from './dto/createGroupRole.dto';
import { ResponseStruct } from '@/utils/response';

@Controller('group-role')
export class GroupRoleController {
  constructor(private groupRoleService: GroupRoleService) {}

  @Post('/create-group-role')
  async createGroupRole(
    @Body() createGroupRoleDto: CreateGroupRole,
    @Res() res: Response,
  ) {
    try {
      const groupRole = await this.groupRoleService.createGroupRole(
        createGroupRoleDto,
      );
      if (_.isError(groupRole)) {
        throw new BadRequestException(groupRole);
      }
      return res
        .status(HttpStatus.CREATED)
        .json(ResponseStruct.responseStruct(1, groupRole));
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
