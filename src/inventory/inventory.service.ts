import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Inventory } from './inventory.model';
import { User } from "../auth/user.model";
import { Donor } from "../donor/donor.model";
import { Product } from "../product/product.model";
import { InventoryDTO } from "./inventory.dto";

@Injectable()
export class InventoryService {

    constructor(
    @InjectRepository(Inventory) private readonly invRepo : Repository<Inventory>){}

    async getInv(): Promise<Inventory[]> {
        //const listInv = await this.invRepo.find({relations: ['fk_user','fk_prod','fk_don']});
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_user", "user").leftJoin("inv.fk_prod", "prod").leftJoin("inv.fk_don", "don")
        .select("inv.cant", "cantidad").addSelect("prod.gr_paq", "gramos").addSelect("prod.gr_paq * inv.cant", "total")
        .addSelect("prod.nombre", "producto").addSelect("inv.fecha_reg", "registro").addSelect("inv.fecha_ven", "vencimiento")
        .addSelect("inv.valor_usd", "valor").addSelect("inv.contratador", "contratador")
        .addSelect("don.nombre", "donante").addSelect("user.correo", "correo").orderBy("inv.fecha_reg", "DESC")
        .getRawMany();
        return listInv;
    }

    async getInvEgresses(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_user", "user").leftJoin("inv.fk_prod", "prod")
        .select("inv.cant", "cantidad").addSelect("prod.gr_paq", "gramos").addSelect("prod.gr_paq * inv.cant", "total")
        .addSelect("prod.nombre", "producto").addSelect("inv.fecha_reg", "registro").addSelect("user.correo", "correo")
        .where("inv.cant < 0").orderBy("inv.fecha_reg", "DESC")
        .getRawMany();
        return listInv;
    }

    async getInvEntries() {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_user", "user").leftJoin("inv.fk_prod", "prod").leftJoin("inv.fk_don", "don")
        .select("inv.cant", "cantidad").addSelect("prod.gr_paq", "gramos").addSelect("prod.gr_paq * inv.cant", "total")
        .addSelect("prod.nombre", "producto").addSelect("inv.fecha_reg", "registro").addSelect("inv.fecha_ven", "vencimiento")
        .addSelect("inv.valor_usd", "valor").addSelect("inv.contratador", "contratador")
        .addSelect("don.nombre", "donante").addSelect("user.correo", "correo")
        .where("inv.cant > 0").orderBy("inv.fecha_reg", "DESC")
        .getRawMany();
        return listInv;
    }

    async getInvAct(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod")
        .select("SUM(prod.gr_paq * inv.cant)", "total").addSelect("prod.nombre", "producto")
        .groupBy("prod.nombre").orderBy("prod.nombre")
        .getRawMany();
        return listInv;
    }

    async getInvSingle(invID : Number): Promise<Inventory>{
        const inv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_user", "user").leftJoin("inv.fk_prod", "prod").leftJoin("inv.fk_don", "don")
        .select("inv.cant", "cantidad").addSelect("prod.gr_paq", "gramos").addSelect("prod.gr_paq * inv.cant", "total")
        .addSelect("prod.nombre", "producto").addSelect("inv.fecha_reg", "registro").addSelect("inv.fecha_ven", "vencimiento")
        .addSelect("inv.valor_usd", "valor").addSelect("inv.contratador", "contratador")
        .addSelect("don.nombre", "donante").addSelect("user.correo", "correo")
        .where("inv.id = :invID ", { invID }).orderBy("inv.fecha_reg", "DESC")
        .getRawOne();
        return inv;
    }
    /*
    async createInv(invDTO: InventoryDTO): Promise<Inventory>{
        
        const u = invDTO.fk_user
        const p = invDTO.fk_prod
        const d = invDTO.fk_don
        const us = await this.userRepo.createQueryBuilder("user").where("user.id = :u", { u }).getOne();
        const pro = await this.userRepo.createQueryBuilder("prod").where("prod.id = :p", { p }).getOne();
        const don = await this.userRepo.createQueryBuilder("donant").where("donant.id = :d", { d }).getOne();
        await this.invRepo.createQueryBuilder()
        return
        
    }
    */
    updateInv() {

    }

    deleteInv() {
        
    }





}
