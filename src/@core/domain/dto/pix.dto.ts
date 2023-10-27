import { IsNotEmpty, IsOptional } from "class-validator"

export class PixDto {
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    valorDesconto: string

    @IsNotEmpty()
    nomeAvalistaPix: string

    @IsNotEmpty()
    nomeAtendente: string

    @IsNotEmpty()
    cpfAtendente: string

    @IsNotEmpty()
    protocolo: string

    @IsNotEmpty()
    numeroAcordo: string

    @IsNotEmpty()
    total: string
    
    @IsNotEmpty()
    nomeCliente: string

    @IsNotEmpty()
    dataVencimento: string

    @IsOptional()
    cpfCnpj?: string

    @IsNotEmpty()
    codigoCliente: string

    @IsOptional()
    codigoBarrasPix?: string

    @IsOptional()
    descricao?: string

    @IsOptional()
    cidade?: string

    @IsOptional()
    user_id?: number
  }