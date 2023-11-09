import { Body, Controller, Get, Post } from '@nestjs/common';
import { InvoiceService } from 'src/@core/application/use-cases/invoice.use-case';
import { InvoiceDto } from 'src/@core/domain/dto/invoice.dto';

@Controller('')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService) {}

    @Post('create')
    async createInvoice(@Body() invoiceDto: InvoiceDto) {
        return this.invoiceService.storeInvoice(invoiceDto)
    }

    @Get('configuracoes')
    async getAllPaymentConfig() {
        return this.invoiceService.getPaymentConfig()
    }
}
