import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Role from "../enum/role.enum";
import Permission from "../enum/permission.enum";

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
        enum: Role,
        array: true,
        default: [Role.ADMIN]
    })
    public roles: Role[];

    @Column({
        type: 'enum',
        enum: Permission,
        array: true,
        default: [Permission.FULL]
      })
      public permissions: Permission[]

}