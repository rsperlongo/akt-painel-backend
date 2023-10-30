import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/@core/domain/dto/Users.dto';
import { LoginUserDto } from 'src/@core/domain/dto/User-login.dto';
import { toUserDto } from 'src/shared/mapper';
import { Admin, Repository } from 'typeorm';
import { CreateUserDto } from 'src/@core/domain/dto/createUser.dto';
import * as bycript from 'bcrypt';
import { User } from 'src/@core/domain/entities/user.entity';
import { UpdateUsersDto } from 'src/@core/domain/dto/Update-user.dto';
import RegisterDto from 'src/@core/domain/dto/register.dto';
import Role from 'src/@core/domain/enum/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getByUsername(username: string) {
    const user = await this.usersRepository.findOne({ where: { username } });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this username does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = new User();

    newUser.username = createUserDto.username;
    newUser.password = createUserDto.password;

    return await this.usersRepository.save(newUser);
  }

  async getById(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(user: CreateUserDto) {
    const newUser = await this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    const { password, ...userResult } = newUser;
    return userResult;
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.usersRepository.findOne({
      where: { username },
    });
    
    const passwordValid = await bycript.compare(password, user.password)
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    if(user && passwordValid) {
      return user;
    }
    
    return toUserDto(user);
  }

  async findByPayload({ username }: any): Promise<UserDto> {
    return await this.usersRepository.findOne({ where: { username } });
  }

  // USERS CRUD

  async findAll() {
    return this.usersRepository.find()
  }

  async findAllAdmin() {
    return this.usersRepository.findOne({
      where: { roles: Role.ADMIN }
    })
  }

  async findAllOperators() {
    return this.usersRepository.findOne({
      where: { roles: Role.OPERATOR }
    })
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id }
    });

    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return this.usersRepository.remove(user);
  }

  async update(id: string, updateUser: UpdateUsersDto) {
    const user = await this.usersRepository.preload({
        id,
        ...updateUser
    });
    if(!user) {
        throw new HttpException(`Member ${id} not found`, HttpStatus.NOT_FOUND)
    }
    return user;
}
}
