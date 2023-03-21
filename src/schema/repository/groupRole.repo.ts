import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GroupRole } from '@/schema/models/groupRole.model';

export class GroupRoleRepository {
  constructor(
    @InjectModel(GroupRole.name)
    private readonly groupRoleModel: Model<GroupRole>,
  ) {}

  async createGroupRole(newGroupRole: GroupRole) {
    try {
      const groupRole = await this.groupRoleModel.create(newGroupRole);
      return groupRole;
    } catch (error) {
      return error;
    }
  }

  async getGroupRoleById(_id: string) {
    const groupRole = await this.groupRoleModel.findOne({ _id });
    if (!groupRole) {
      return new Error('Group role not found');
    }
    return groupRole;
  }
}
