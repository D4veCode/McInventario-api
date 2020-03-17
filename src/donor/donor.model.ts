import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from "typeorm";

@Entity({ name: 'donantes' })
export class Donor extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 60 })
    nombre: string

    @Column({ type: "varchar", length: 1 })
    Tip_id: string

    @Column({ type: "varchar", length: 12 })
    Num_id: string

    @Column({ type: "varchar", nullable: true, length: 80 })
    Direccion: string

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string
}