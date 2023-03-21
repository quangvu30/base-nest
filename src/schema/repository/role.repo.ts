import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Role } from '@/schema/models/role.model';

export class RoleRepository {
  constructor(
    @InjectModel(Role.name)
    private readonly roleModel: Model<Role>,
  ) {}

  async createRole(newRole: Role) {
    try {
      const role = await this.roleModel.create(newRole);
      return role;
    } catch (error) {
      return error;
    }
  }

  async getRoleById(_id: string) {
    const role = await this.roleModel.findOne({ _id });
    if (!role) {
      return new Error('Role not found');
    }
    return role;
  }
}
