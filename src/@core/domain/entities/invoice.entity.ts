import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeAvalistaBoleto: string

    @Column()
    cpfCnpj: string

    @Column()
    nomeCliente: string

    @Column()
    nomeAvalistaPix: string

    @Column()
    chavePix: string

    @Column()
    cidade: string

    @Column('')
    codigoTransferencia: string
}