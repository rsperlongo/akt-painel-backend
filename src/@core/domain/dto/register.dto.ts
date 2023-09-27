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

  @IsNotEmpty()
  @IsEnum(Role)
  type: Role;
}

export default RegisterDto;
