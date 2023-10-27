import { Collection, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeCliente: string

    @Column()
    valor: string

    @Column()
    dataVencimento: string

    @Column()
    codigoCliente: string

    @Column()
    codigoBarrasPix: string

    @Column()
    descricao: string

    @Column()
    nomeAvalistaBoleto: string

    @Column()
    tipo: string

    @Column()
    nomeAvalistaPix: string

    @Column()
    cidade: string
}