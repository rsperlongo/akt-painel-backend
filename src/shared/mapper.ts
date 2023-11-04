import { UserDto } from 'src/@core/domain/dto/Users.dto';
import { User } from 'src/@core/domain/entities/user.entity';

export const toUserDto = (data: User): UserDto => {
  const { id, name, username, finalNumber, password, roles } = data;

  const usersDto : UserDto = {
    id,
    name,
    username,
    finalNumber,
    password,
    roles
  };

  return usersDto;
};
