import { IsEmail, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateUser {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsNotEmpty()
  birthday: string;
}
