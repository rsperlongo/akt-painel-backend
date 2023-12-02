import { IsNotEmpty, IsOptional } from "class-validator"

export class PixDto {
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    nome: string

    @IsNotEmpty()
    cidade: string

    @IsNotEmpty()
    saida: string

    @IsNotEmpty()
    chave: string

    @IsNotEmpty()
    valor: string
  }