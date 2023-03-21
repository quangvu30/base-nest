import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from '@/schema/models/user.model';

export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async createUser(newUser: User) {
    try {
      const user = await this.userModel.create(newUser);
      return user;
    } catch (error) {
      return error;
    }
  }

  async getUserById(_id: string) {
    const user = await this.userModel.findOne({ _id });
    if (!user) {
      return new Error('User not found');
    }
    return user;
  }
}
