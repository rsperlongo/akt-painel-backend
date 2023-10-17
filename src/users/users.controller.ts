import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/@core/application/use-cases/users.use-case';
import Role from 'src/@core/domain/enum/role.enum';
import { Roles } from './role.decorators';
import { UpdateUsersDto } from 'src/@core/domain/dto/Update-user.dto';
import RoleGuard from './role.guard';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
 
  @Get('')
  @Roles(Role.ADMIN)
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


  @Put('edit/:id')
  @Roles(Role.ADMIN)
  async updateUser(
    @Param('id') id: string,
    @Body() updateUser: UpdateUsersDto,
  ): Promise<UpdateUsersDto> {
    return this.usersService.update(id, updateUser);
  } 

  @Delete('/:id')
  @UseGuards(RoleGuard(Role.ADMIN))
  // @UseGuards(AuthGuard())
  async removeUser(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
