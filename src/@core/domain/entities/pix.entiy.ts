import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pix {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    cidade: string

    @Column()
    saida: string

    @Column()
    chave: string

    @Column()
    valor: string
}