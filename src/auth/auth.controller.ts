import {
    Controller,
    Post,
    Body,
    Res,
    HttpException,
    HttpStatus,
    UseGuards,
  } from '@nestjs/common';
  import { LoginStatus } from './interfaces/login-status.interface';
  import { CreateUserDto } from 'src/@core/domain/dto/createUser.dto';
  import { RegistrationStatus } from './interfaces/registration-status.interface';
import { AuthService } from 'src/@core/application/use-cases/auth.use-case';
import { LogInDto } from 'src/@core/domain/dto/login.dto';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    
    @Post('register')
    public async register(
      @Body() createUserDto: CreateUserDto,
    ): Promise<RegistrationStatus> {
      const result: RegistrationStatus =
        await this.authService.register(createUserDto);
  
      if (!result.success) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
      }
  
      return result;
    }
  
    @Post('login')
    async logIn(@Body() loginUserDto: LogInDto): Promise<LoginStatus> {
      return await this.authService.login(loginUserDto);
    }
  
    @Post('logout')
    async logOut(@Res() res: Response) {
      return res.status;
    }
  }
  
