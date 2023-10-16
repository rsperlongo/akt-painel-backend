import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/@core/domain/entities/user.entity';
import { UsersService } from 'src/@core/application/use-cases/users.use-case';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './role.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  providers: [
    UsersService,
    {
      provide: APP_GUARD,
      useClass: RoleGuard
    }
  ],
  controllers: [UsersController],
  exports: [PassportModule]
})
export class UsersModule {}
