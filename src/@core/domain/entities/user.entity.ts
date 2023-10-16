import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Role from "../enum/role.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column('varchar')
    public name: string;

    @Column({ unique: true })
    public username: string

    @Column({ unique: true })
    public password: string

    @Column()
    public finalNumber: string;

    @Column({
        type: 'enum',
        enum: Role
    })
    public roles: Role[];

}