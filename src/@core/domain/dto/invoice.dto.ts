import { IsNotEmpty } from "class-validator";

export class InvoiceDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    nomeAvalistaBoleto: string;

    @IsNotEmpty()
    cpfCnpj: string;

    @IsNotEmpty()
    nomeCliente: string;

    @IsNotEmpty()
    nomeAvalistaPix: string;

    @IsNotEmpty()
    chavePix: string;

    @IsNotEmpty()
    cidade: string;

    @IsNotEmpty()
    codigoTransferencia: string;

}