import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import Role from '../enum/role.enum';
export class UserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  finalNumber: string;

  @IsNotEmpty()
  @IsEnum(Role)
  roles: Role;

  createdOn?: Date;
}