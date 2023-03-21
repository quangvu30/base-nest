import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import { HydratedDocument, Types } from 'mongoose';
import { Role } from '@/schema/models/role.model';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @IsEmail()
  @Prop({ required: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  birthday: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Role' }] })
  role: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
