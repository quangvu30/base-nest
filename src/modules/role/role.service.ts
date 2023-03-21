import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

import { RoleRepository } from '@/schema/repository/role.repo';
import { CreateRole } from './dto/createRole.dto';
import { Role } from '@/schema/models/role.model';
import { GroupRoleService } from '@/modules/groupRole/groupRole.service';

@Injectable()
export class RoleService {
  constructor(
    private readonly roleRepository: RoleRepository,
    private groupRoleService: GroupRoleService,
  ) {}

  async createRole(createRoleDto: CreateRole) {
    const groupRole = await this.groupRoleService.getGroupRoleById(
      createRoleDto.groupRole,
    );
    if (!_.isError(groupRole)) {
      const role = await this.roleRepository.createRole({
        ...createRoleDto,
        groupRole,
      });
      return role;
    }
    return groupRole;
  }
}
