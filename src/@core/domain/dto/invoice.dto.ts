import { IsNotEmpty } from "class-validator";

export class InvoiceDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    nomeCliente: string;

    @IsNotEmpty()
    valor: string;

    @IsNotEmpty()
    dataVencimento: string;

    @IsNotEmpty()
    codigoCliente: string;

    @IsNotEmpty()
    codigoBarrasPix: string;

    @IsNotEmpty()
    descricao: string;

    @IsNotEmpty()
    nomeAvalistaBoleto: string;

    @IsNotEmpty()
    tipo: string;

    @IsNotEmpty()
    nomeAvalistaPix: string;

    @IsNotEmpty()
    cidade: string;
}