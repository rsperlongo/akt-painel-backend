import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pix {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    valorDesconto: string

    @Column()
    nomeAvalistaPix: string

    @Column()
    nomeAtendente: string

    @Column()
    cpfAtendente: string

    @Column()
    protocolo: string

    @Column()
    numeroAcordo: string

    @Column()
    total: string
    
    @Column()
    nomeCliente: string

    @Column()
    dataVencimento: string

    @Column()
    cpfCnpj: string

    @Column()
    codigoCliente: string

    @Column()
    codigoBarrasPix: string

    @Column()
    descricao: string

    @Column()
    cidade: string

    @Column()
    user_id: number
}