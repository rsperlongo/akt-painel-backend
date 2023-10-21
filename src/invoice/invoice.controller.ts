import { Controller, Post } from '@nestjs/common';
import { InvoiceService } from 'src/@core/application/use-cases/invoice.use-case';

@Controller('')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService) {}

    @Post('/boletos')
    getInvoice(usuario: string, senha: string) {
        return this.invoiceService.getInvoiceToken(usuario, senha);
    }

}
