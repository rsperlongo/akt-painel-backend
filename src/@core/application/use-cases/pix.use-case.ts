import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { Pix } from "src/@core/domain/entities/pix.entiy";

@Injectable()
export class PixService {
    constructor(
        @InjectRepository(Pix)
        private readonly httpService: HttpService
    ) { }

    createPix(nome: string, cidade: string, chave: string, valor: string): Observable<AxiosResponse<any>> {
        return this.httpService.get<any>(`https://gerarqrcodepix.com.br/api/v1?nome=${nome}&cidade=${cidade}&saida=qr&chave=${chave}&valor=${valor}` ,
       ).pipe(map((resp) => resp.data))
    }


}