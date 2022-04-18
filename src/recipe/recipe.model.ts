import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, BaseEntity } from "typeorm";

@Entity({ name: 'recetas' })
export class Recipe extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 60 })
    nombre: string

    @Column('int')
    gr_persona: number

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string
    
}