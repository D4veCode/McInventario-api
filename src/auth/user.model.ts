import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BeforeInsert, BaseEntity } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 100, unique: true })
    correo: string

    @Column({ type: 'varchar', length: 200 })
    clave: string

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string

    @BeforeInsert()
    async hashPassword() {
        this.clave = await bcrypt.hash(this.clave, 10);
    }

}