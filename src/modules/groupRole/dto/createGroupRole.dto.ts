import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupRole {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
