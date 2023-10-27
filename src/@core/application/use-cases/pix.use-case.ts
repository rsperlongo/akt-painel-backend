import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PixDto } from "src/@core/domain/dto/pix.dto";
import { Pix } from "src/@core/domain/entities/pix.entiy";
import { Repository } from "typeorm";
const express = require('express')
const app = express()

@Injectable()
export class PixService {
    constructor(
        @InjectRepository(Pix)
        private pixRepository: Repository<Pix>,
    ) {}

    async storePix(pixDto: PixDto) {
        try {
            const pix = await this.pixRepository.create(pixDto)
            await this.pixRepository.save(pix)
    
            const io = app.get('io')
            io.emit('solicitarBoleto', pix)
    
            } catch (error) {
                throw new HttpException({ 
                    status: HttpStatus.BAD_REQUEST, 
                    error: 'Não foi possível solicitar o qrcode!' 
                }, HttpStatus.BAD_REQUEST, {
                    cause: error
                })
            }
    }
}