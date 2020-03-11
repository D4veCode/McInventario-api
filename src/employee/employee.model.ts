import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "../auth/user.model";

@Entity()
export class Empleado{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 30})
    nombre: string

    @Column({ type: "varchar", length: 30})
    apellido: string

    @Column({ type: "varchar", length: 8})
    CI: string

    @Column({ type: "varchar", nullable: true, length: 30})
    cargo: string

    @OneToOne(type => User, {onDelete: "CASCADE"})
    @JoinColumn({name: 'Fk_user'})
    user: User

    @CreateDateColumn({type: 'time without time zone', default: () => 'CURRENT_TIMESTAMP'})
    createdAt:string
}