import { UserDto } from 'src/@core/domain/dto/Users.dto';
import { User } from 'src/@core/domain/entities/user.entity';

export const toUserDto = (data: User): UserDto => {
  const { id, username } = data;

  const usersDto : UserDto = {
    id,
    username,
  };

  return usersDto;
};
