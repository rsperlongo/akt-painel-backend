import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { PixService } from 'src/@core/application/use-cases/pix.use-case';
import { PixDto } from 'src/@core/domain/dto/pix.dto';
import { RegistrationStatus } from 'src/auth/interfaces/registration-status.interface';

@Controller('')
export class PixController {

    constructor(private pixService: PixService) {}

    @Post('pix')
    public async createPix(
    @Body() pixDto: PixDto) {
        return this.pixService.storePix(pixDto)
    }  
}
