import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GroupRoleDocument = HydratedDocument<GroupRole>;

@Schema()
export class GroupRole {
  @Prop({ unique: true })
  name: string;

  @Prop()
  description: string;
}

export const GroupRoleSchema = SchemaFactory.createForClass(GroupRole);
