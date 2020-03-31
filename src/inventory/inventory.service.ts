import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Inventory } from './inventory.model';
import { User } from "../auth/user.model";
import { Donor } from "../donor/donor.model";
import { Product } from "../product/product.model";

import { InventoryDTO } from "./inventory.dto";

import {ProductService} from "../product/product.service";
import {DonorService} from "../donor/donor.service";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class InventoryService {

    constructor(@InjectRepository(Inventory) private readonly invRepo : Repository<Inventory>){}

    async getInv(): Promise<Inventory[]> {
        //const listInv = await this.invRepo.find({relations: ['fk_user','fk_prod','fk_don']});
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_user", "user").leftJoin("inv.fk_prod", "prod").leftJoin("inv.fk_don", "don")
        .select("inv.id", "id").addSelect("inv.cant", "cantidad").addSelect("prod.gr_paq", "gramos").addSelect("prod.gr_paq * inv.cant", "total")
        .addSelect("prod.nombre", "producto").addSelect("inv.fecha_reg", "registro").addSelect("inv.fecha_ven", "vencimiento")
        .addSelect("inv.valor_usd", "valor").addSelect("inv.contratador", "contratador")
        .addSelect("don.nombre", "donante").addSelect("user.correo", "correo").orderBy("inv.fecha_reg", "DESC").addOrderBy("inv.id", "DESC")
        .getRawMany();
        return listInv;
    }

    async getInvEgresses(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_user", "user").leftJoin("inv.fk_prod", "prod")
        .select("inv.id", "id").addSelect("inv.cant", "cantidad").addSelect("prod.gr_paq", "gramos").addSelect("prod.gr_paq * inv.cant", "total")
        .addSelect("prod.nombre", "producto").addSelect("inv.fecha_reg", "registro").addSelect("user.correo", "correo")
        .where("inv.cant < 0").orderBy("inv.fecha_reg", "DESC").addOrderBy("inv.id", "DESC")
        .getRawMany();
        return listInv;
    }

    async getInvEntries(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_user", "user").leftJoin("inv.fk_prod", "prod").leftJoin("inv.fk_don", "don")
        .select("inv.id", "id").addSelect("inv.cant", "cantidad").addSelect("prod.gr_paq", "gramos").addSelect("prod.gr_paq * inv.cant", "total")
        .addSelect("prod.nombre", "producto").addSelect("inv.fecha_reg", "registro").addSelect("inv.fecha_ven", "vencimiento")
        .addSelect("inv.valor_usd", "valor").addSelect("inv.contratador", "contratador")
        .addSelect("don.nombre", "donante").addSelect("user.correo", "correo")
        .where("inv.cant > 0").orderBy("inv.fecha_reg", "DESC").addOrderBy("inv.id", "DESC")
        .getRawMany();
        return listInv;
    }

    async getInvAct(): Promise<Inventory[]> {
        const inv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod")
        .select("SUM(prod.gr_paq * inv.cant)", "total").addSelect("prod.nombre", "producto")
        .groupBy("prod.nombre").orderBy("prod.nombre")
        .getRawMany();
        return inv;
    }

    async getInvSingle(invID : Number): Promise<Inventory>{
        const inv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_user", "user").leftJoin("inv.fk_prod", "prod").leftJoin("inv.fk_don", "don")
        .select("inv.id", "id").addSelect("inv.cant", "cantidad").addSelect("prod.gr_paq", "gramos").addSelect("prod.gr_paq * inv.cant", "total")
        .addSelect("prod.nombre", "producto").addSelect("inv.fecha_reg", "registro").addSelect("inv.fecha_ven", "vencimiento")
        .addSelect("inv.valor_usd", "valor").addSelect("inv.contratador", "contratador")
        .addSelect("don.nombre", "donante").addSelect("user.correo", "correo")
        .where("inv.id = :invID ", { invID }).orderBy("inv.fecha_reg", "DESC")
        .getRawOne();
        return inv;
    }

    async deleteInv(invID : Number) : Promise<Inventory>{
        const inv = await this.getInvSingle(invID);
        this.invRepo.createQueryBuilder()
        .delete()
        .from(Inventory)
        .where("id = :invID" , { invID })
        .execute();
        return inv;
    }

    async createInvEntry(invDTO : InventoryDTO) : Promise<Inventory>{
        invDTO.cant = Math.abs(invDTO.cant)
        const data:InventoryDTO = new InventoryDTO(invDTO);
        const inv = await this.getInvSingle((await this.invRepo.save(data.toInvEntry())).id);
        console.log(inv);
        return inv;
    }

    async createInvEgress(invDTO : InventoryDTO) : Promise<Inventory>{
        invDTO.cant = (-1)*Math.abs(invDTO.cant)
        const data:InventoryDTO = new InventoryDTO(invDTO);
        const inv = await this.getInvSingle((await this.invRepo.save(data.toInvEgress())).id);
        console.log(inv);
        return inv;
    }

    async updateInv(invDTO : InventoryDTO, invID : Number) :  Promise<Inventory>{
        const data:InventoryDTO = new InventoryDTO(invDTO);
        await this.invRepo.createQueryBuilder()
        .update(Inventory)
        .set({ 
            cant: data.cant, 
            fecha_reg: data.fecha_reg,
            fecha_ven: data.fecha_ven,
            valor_usd: data.valor_usd,
            contratador: data.contratador,
            fk_don: data.fk_don,
            fk_prod: data.fk_prod
            })
        .where("id = :invID", { invID })
        .execute();
        const inv = await this.getInvSingle(invID);
        return inv;
    }
}
