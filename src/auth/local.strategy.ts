import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../@core/application/use-cases/auth.use-case';
import {User} from '../@core/domain/entities/user.entity';
import { JwtPayload } from './interfaces/payload.interface';
import { UserDto } from 'src/@core/domain/dto/Users.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthService) {
    super({
      usernameField: 'username'
    });
  }
  async validate(payload: JwtPayload): Promise<UserDto> {
    return this.authenticationService.validateUser(payload );
  }
}