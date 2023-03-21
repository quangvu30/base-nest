import { Injectable } from '@nestjs/common';
import { ClientSession, Schema as MongooseSchema } from 'mongoose';

import { UserRepository } from '@/schema/repository/user.repo';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
}
