import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../use-cases/users.use-case';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../../../@core/domain/dto/users.dto';

import * as bycript from 'bcrypt';
import { CreateUserDto } from 'src/@core/domain/dto/createUser.dto';
import { RegistrationStatus } from 'src/auth/interfaces/registration-status.interface';
import { LoginUserDto } from 'src/@core/domain/dto/User-login.dto';
import { LoginStatus } from 'src/auth/interfaces/login-status.interface';
import { JwtPayload } from 'src/auth/interfaces/payload.interface';

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
      createdUser.password = undefined;
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