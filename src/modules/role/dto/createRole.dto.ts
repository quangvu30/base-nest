import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRole {
  @IsString()
  @IsNotEmpty()
  groupRole: string;

  @IsString()
  @IsNotEmpty()
  parent: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
