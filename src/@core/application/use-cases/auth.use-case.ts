import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bycript from 'bcrypt';
import { CreateUserDto } from 'src/@core/domain/dto/createUser.dto';
import { LoginUserDto } from 'src/@core/domain/dto/user-login.dto';
import { UserDto } from 'src/@core/domain/dto/users.dto';
import { LoginStatus } from 'src/auth/interfaces/login-status.interface';
import { JwtPayload } from 'src/auth/interfaces/payload.interface';
import { RegistrationStatus } from 'src/auth/interfaces/registration-status.interface';
import { UsersService } from './users.use-case';
import Role from 'src/@core/domain/enum/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  public async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    const hashedPassword = await bycript.hash(userDto.password, 10);

    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };
    try {
      const createdUser = await this.usersService.create({
        ...userDto,
        password: hashedPassword,
      });
      createdUser.roles = Role[0];
    } catch (error) {
      status = {
        success: false,
        message: error,
      };
    }
    return status;
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    return {
      username: user.username,
      ...token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ username }: UserDto): any {
    const expiresIn = process.env.EXPIRESIN;

    const user: JwtPayload = { username };
    const accessToken = this.jwtService.sign(user, {
      secret: process.env.JWT_SECRET,
      expiresIn: '60h',
    });
    console.log(accessToken);
    return {
      expiresIn,
      accessToken,
    };
  }
}


