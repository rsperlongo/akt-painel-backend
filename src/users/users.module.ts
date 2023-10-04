import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/@core/domain/entities/user.entity';
import { UsersService } from 'src/@core/application/use-cases/users.use-case';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  providers: [
    UsersService,
  ],
  controllers: [UsersController],
  exports: [PassportModule]
})
export class UsersModule {}
