import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, BaseEntity } from "typeorm";
import { User } from "../auth/user.model";
import { Donor } from "../donor/donor.model";
import { Product } from "../product/product.model";

@Entity({ name: 'inventarios' })
export class Inventory extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    Cant: number

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    Fecha_reg: string

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    Fecha_ven: string

    @Column('real', {nullable: true})
    Valor_Usd: number

    @Column({ type: "varchar", length: 60, nullable: true  })
    Contratador: string

    @OneToOne(type => User, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'Fk_user' })
    Fk_user: User

    @OneToOne(type => Donor, { onDelete: "CASCADE", nullable: true})
    @JoinColumn({ name: 'Fk_don' })
    Fk_Don: Donor
s
    @OneToOne(type => Product, { onDelete: "CASCADE"})
    @JoinColumn({ name: 'Fk_Prod' })
    Fk_Prod: Product

}	

