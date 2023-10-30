import { IsNotEmpty, IsString } from 'class-validator';
export class UserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  createdOn?: Date;
}