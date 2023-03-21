import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { GroupRole } from '@/schema/models/groupRole.model';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @Prop({ type: Types.ObjectId, ref: 'GroupRole' })
  groupRole: GroupRole;

  @Prop({ type: Types.ObjectId })
  parent: string;

  @Prop({ unique: true })
  name: string;

  @Prop()
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
