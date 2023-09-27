import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}