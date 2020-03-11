import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'varchar', length:100, unique:true})
    correo:string

    @Column({type:'varchar', length: 200})
    clave:string

    @CreateDateColumn({type: 'time without time zone', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt:string

    @BeforeInsert()
    async hashPassword() {
        this.clave = await bcrypt.hash(this.clave, 10);
    }
}