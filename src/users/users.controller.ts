import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from 'src/@core/application/use-cases/users.use-case';
import { UpdateUsersDto } from 'src/@core/domain/dto/Update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll() {
    return this.usersService.findAll();
  } 

  /* @Patch('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUser: UpdateUsersDto,
  ): Promise<UpdateUsersDto> {
    return this.usersService.update(id, updateUser);
  }  */

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
