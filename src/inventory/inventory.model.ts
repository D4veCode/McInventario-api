import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { User } from "../auth/user.model";
import { Donor } from "../donor/donor.model";
import { Product } from "../product/product.model";

@Entity({ name: 'inventarios' })
export class Inventory extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    cant: number

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    fecha_reg: string

    @CreateDateColumn({ type: 'date', nullable: true })
    fecha_ven: string

    @Column('real', {nullable: true})
    valor_usd: number

    @Column({ type: "varchar", length: 60, nullable: true  })
    contratador: string

    @ManyToOne(type => User, { onDelete: "CASCADE" , nullable: false })
    @JoinColumn({ name: 'fk_user' })
    fk_user: User

    @ManyToOne(type => Donor, { onDelete: "CASCADE", nullable: true})
    @JoinColumn({ name: 'fk_don' })
    fk_don: Donor
    
    @ManyToOne(type => Product, { onDelete: "CASCADE" , nullable: false})
    @JoinColumn({ name: 'fk_prod' })
    fk_prod: Product

}	

