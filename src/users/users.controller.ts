import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/@core/application/use-cases/users.use-case';
import Role from 'src/@core/domain/enum/role.enum';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './role.decorators';
import RoleGuard from './role.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  @UseGuards(RoleGuard(Role.ADMIN))
  async getAll() {
    return this.usersService.findAll();
  } 

  @Get('admin')
  async getAllAdmin() {
    return this.usersService.findAllAdmin()
  }

  @Get('operators')
  async getAllOperators() {
    return this.usersService.findAllOperators()
  }


  /* @Patch('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUser: UpdateUsersDto,
  ): Promise<UpdateUsersDto> {
    return this.usersService.update(id, updateUser);
  }  */

  @Delete('/:id')
  @UseGuards(RoleGuard(Role.ADMIN))
  @UseGuards(AuthGuard())
  async removeUser(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Get()
  createUser() {
    
  }
}
