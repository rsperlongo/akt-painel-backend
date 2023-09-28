import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/@core/domain/entities/user.entity';
import { UsersService } from 'src/@core/application/use-cases/users.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
  ],
  controllers: [UsersController]
})
export class UsersModule {}
