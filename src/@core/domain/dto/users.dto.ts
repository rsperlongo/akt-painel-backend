import { IsNotEmpty, IsString } from 'class-validator';
import Role from '../enum/role.enum';

export class UserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  createdOn?: Date;
}