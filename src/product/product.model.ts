import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, BaseEntity } from "typeorm";

@Entity({ name: 'productos' })
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 60 })
    nombre: string

    @Column({ type: "varchar", length: 60 })
    marca: string

    @Column('int')
    gr_paq: number

    @Column({ type: "varchar", nullable: true, length: 30 })
    tipo: string

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string
    
}