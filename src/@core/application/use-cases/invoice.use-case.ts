import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InvoiceDto } from "src/@core/domain/dto/invoice.dto";
import { Invoice } from "src/@core/domain/entities/invoice.entity";
import { Repository } from "typeorm";
const express = require('express')
const app = express()

@Injectable()
export class InvoiceService {
    constructor(
        @InjectRepository(Invoice)
        private invoiceRepository: Repository<Invoice>
        ) {}

    async storeInvoice(invoiceDto: InvoiceDto) {
        try {
        const invoice = await this.invoiceRepository.create(invoiceDto)
        await this.invoiceRepository.save(invoice)

        const io = app.get('io')
        io.emit('solicitarBoleto', invoice)

        } catch (error) {
            throw new HttpException({ 
                status: HttpStatus.BAD_REQUEST, 
                error: 'Não foi possível solicitar o boleto' 
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            })
        }
    }
}