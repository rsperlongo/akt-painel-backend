import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import Role from '../enum/role.enum';
import Permission from '../enum/permission.enum';

export class RegisterDto {
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

  @IsNotEmpty()
  @IsEnum(Permission)
  permissions: Permission;
}

export default RegisterDto;
