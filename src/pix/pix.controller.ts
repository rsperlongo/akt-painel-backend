import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { PixService } from 'src/@core/application/use-cases/pix.use-case';
import { PixDto } from 'src/@core/domain/dto/pix.dto';

@Controller('')
export class PixController {

    constructor(private pixService: PixService) {}

    @Get('createpix')
    public async createPix(
    @Param() nome: string, cidade: string, chave: string, valor: string, saida?: string) {
        return this.pixService.createPix(nome, cidade, chave, valor)
    }  
}
