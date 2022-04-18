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

    constructor(
        @InjectRepository(Inventory) private readonly invRepo : Repository<Inventory>,
        private prodService : ProductService,
        private donService : DonorService
    ){}

    async getInv(): Promise<Inventory[]> {
        //const listInv = await this.invRepo.find({relations: ['fk_user','fk_prod','fk_don']});
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_user", "user").leftJoin("inv.fk_prod", "prod").leftJoin("inv.fk_don", "don")
        .select("inv.id", "id").addSelect("inv.cant", "cantidad").addSelect("prod.gr_paq", "gramos").addSelect("prod.gr_paq * inv.cant", "total")
        .addSelect("prod.nombre", "producto").addSelect("inv.fecha_reg", "registro").addSelect("inv.fecha_ven", "vencimiento")
        .addSelect("inv.valor_usd", "valor").addSelect("inv.contratador", "contratador")
        .addSelect("don.nombre", "donante").addSelect("user.correo", "correo")
        .orderBy("inv.fecha_reg", "DESC").addOrderBy("inv.id", "DESC")
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
        const data:InventoryDTO = new InventoryDTO(invDTO);
        if (data.fk_prod.id == null){
            data.fk_prod = await this.prodService.createProdInv(data.fk_prod)
        }
        if (data.fk_don.id == null){
            data.fk_don = await this.donService.createDonInv(data.fk_don)           
        }
        const inv = await this.getInvSingle((await this.invRepo.save(data.toInvEntry())).id);
        return inv;
    }

    async createInvEgress(invDTO : InventoryDTO) : Promise<Inventory>{
        const data:InventoryDTO = new InventoryDTO(invDTO);
        const inv = await this.getInvSingle((await this.invRepo.save(data.toInvEgress())).id);
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

    //STATS//

    async getTopProductsDonG(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod")
        .select("SUM(prod.gr_paq * inv.cant)", "Total Gr/Ml").addSelect("prod.nombre", "Producto")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("prod.nombre").orderBy("SUM(prod.gr_paq * inv.cant)", "DESC").limit(10)
        .getRawMany();
        return listInv;
    }   

    async getTopProductsDonP(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod")
        .select("SUM(inv.cant)", "Paquetes").addSelect("prod.gr_paq", "Gramos por paquete").addSelect("prod.nombre", "Producto")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("prod.nombre").addGroupBy("prod.gr_paq").limit(10)
        .orderBy("SUM(inv.cant)", "DESC").addOrderBy("prod.gr_paq", "DESC")
        .getRawMany();
        return listInv;
    }

    async getTopDonorsG(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod").leftJoin("inv.fk_don", "don")
        .select("SUM(inv.cant * prod.gr_paq)", "Total Gr/Ml").addSelect("don.nombre", "Donante")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("don.nombre").limit(10)
        .orderBy("SUM(inv.cant * prod.gr_paq)", "DESC")
        .getRawMany();
        return listInv;
    }  

    async getTopDonorsP(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_don", "don")
        .select("SUM(inv.cant)", "Total Paquetes").addSelect("don.nombre", "Donante")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("don.nombre").limit(10)
        .orderBy("SUM(inv.cant)", "DESC")
        .getRawMany();
        return listInv;
    }  

    async getTopDonorsD(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_don", "don")
        .select("Count(don.nombre)", "Cantidad de donaciones").addSelect("don.nombre", "Donante")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("don.nombre").limit(10)
        .orderBy("Count(don.nombre)", "DESC")
        .getRawMany();
        return listInv;
    } 
    
    async getTopDonorsV(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_don", "don")
        .select("ROUND(SUM(inv.cant*inv.valor_usd)::numeric,2)", "Valor de donaciones").addSelect("don.nombre", "Donante")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("don.nombre").limit(10)
        .orderBy("ROUND(SUM(inv.cant*inv.valor_usd)::numeric,2)", "DESC")
        .getRawMany();
        return listInv;
    } 

    async getInvValor(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .select("ROUND(SUM(inv.cant*inv.valor_usd)::numeric,2)", "Valor de donaciones")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .orderBy("ROUND(SUM(inv.cant*inv.valor_usd)::numeric,2)", "DESC")
        .getRawMany();
        return listInv;
    } 

    async getInvValorAlimento(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod")
        .select("ROUND(SUM(inv.cant*inv.valor_usd)::numeric,2)", "Valor de donaciones").addSelect("prod.tipo", "Tipo de producto")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("prod.tipo")
        .orderBy("ROUND(SUM(inv.cant*inv.valor_usd)::numeric,2)", "DESC")
        .getRawMany();
        return listInv;
    } 

    async getTopProductsUsedG(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod")
        .select("(-1)*(SUM(inv.cant * prod.gr_paq))", "Total Gr/Ml").addSelect("prod.nombre", "Producto")
        .where("inv.cant < 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("prod.nombre").limit(10)
        .orderBy("(-1)*(SUM(inv.cant * prod.gr_paq))", "DESC")
        .getRawMany();
        return listInv;
    }

    async getTopProductsUsedP(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod")
        .select("(-1)*SUM(inv.cant)", "Paquetes").addSelect("prod.gr_paq", "Gramos por paquete").addSelect("prod.nombre", "Producto")
        .where("inv.cant < 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("inv.fk_prod").addGroupBy("prod.nombre").addGroupBy("prod.gr_paq").limit(10)
        .orderBy("(-1)*SUM(inv.cant)", "DESC")
        .getRawMany();
        return listInv;
    }

    async getTopContratist(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod")
        .select("count(inv.cant)", "Cantidad de donaciones").addSelect("inv.contratador", "Contratador")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("inv.contratador")
        .orderBy("count(inv.cant)", "DESC")
        .getRawMany();
        return listInv;
    }

    async getTopContratistV(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv")
        .leftJoin("inv.fk_prod", "prod")
        .select("ROUND(SUM(inv.cant*inv.valor_usd)::numeric,2)", "Valor en donaciones").addSelect("inv.contratador", "Contratador")
        .where("inv.cant > 0").andWhere("inv.fecha_reg between TO_DATE(:dateI , 'DD/MM/YYYY') and TO_DATE(:dateF , 'DD/MM/YYYY')", { dateI: "01/01/2020", dateF: "30/10/2020"})
        .groupBy("inv.contratador")
        .orderBy("SUM(inv.valor_usd*inv.cant)", "DESC")
        .getRawMany();
        return listInv;
    }
}
