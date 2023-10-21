import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable, map } from "rxjs";
import { Invoice } from "src/invoice/interfaces/invoice";

@Injectable()
export class InvoiceService {
    constructor(private readonly httpService: HttpService) {}

    getInvoiceToken(usuario: string, senha: string): Observable<AxiosResponse<any>> {
        // const auth = localStorage.getItem('token')
        const url = 'https://sistema-boleto-server-production.up.railway.app';
        return this.httpService
        .post(`${url}/users/authenticate`, {
            usuario,
            senha,
        }).pipe(
            map((res) => res.data?.token)
        )
    }


}