import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, BaseEntity } from "typeorm";
import { User } from "../auth/user.model";

@Entity({ name: 'empleados' })
export class Employee extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 30 })
    nombre: string

    @Column({ type: "varchar", length: 30 })
    apellido: string

    @Column({ type: "varchar", length: 8 })
    CI: string

    @Column({ type: "varchar", nullable: true, length: 30 })
    cargo: string

    @OneToOne(type => User, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'Fk_user' })
    user: User

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string
}