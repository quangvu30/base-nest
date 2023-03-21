import { Injectable } from '@nestjs/common';

import { GroupRoleRepository } from '@/schema/repository/groupRole.repo';
import { CreateGroupRole } from '@/modules/groupRole/dto/createGroupRole.dto';

@Injectable()
export class GroupRoleService {
  constructor(private readonly groupRoleRepository: GroupRoleRepository) {}

  async createGroupRole(createGroupRoleDto: CreateGroupRole) {
    const groupRole = await this.groupRoleRepository.createGroupRole(
      createGroupRoleDto,
    );
    return groupRole;
  }

  async getGroupRoleById(id: string) {
    const groupRole = await this.groupRoleRepository.getGroupRoleById(id);
    return groupRole;
  }
}
