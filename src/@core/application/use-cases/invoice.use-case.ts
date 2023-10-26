import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AxiosResponse } from "axios";
import { Observable, map } from "rxjs";
import { Invoice } from "src/@core/domain/entities/invoice.entity";
import { Repository } from "typeorm";

@Injectable()
export class InvoiceService {
    constructor(
        @InjectRepository(Invoice)
        private invoiceRepository: Repository<Invoice>,
        private readonly httpService: HttpService,
        ) {}

    getInvoiceToken(usuario: string, senha: string): Observable<AxiosResponse<any>> {
        const url = 'https://sistema-boleto-server-production.up.railway.app';
        return this.httpService
        .post(`${url}/users/authenticate`, {
            usuario,
            senha,
        }).pipe(
            map((res) => res.data?.token)
        )
    }

    async storeInvoice() {
        const invoice = await this.invoiceRepository.create()
    }


}