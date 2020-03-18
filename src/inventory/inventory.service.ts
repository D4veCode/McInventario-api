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
        const listInv = await this.invRepo.find();
        console.log(listInv);
        return listInv;
    }

    async getInvEntries(): Promise<Inventory[]> {
        const listInv = await this.invRepo.createQueryBuilder("inv").where("inv.cant > 0").getMany();
        return listInv;
    }

    async getInvEgresses() {
        const listInv = await this.invRepo.createQueryBuilder("inv").where("inv.cant < 0").getMany();
        return listInv;
    }

    async getInvSingle(invID : string): Promise<Inventory>{
        const inv = await this.invRepo.createQueryBuilder()
        .select("*")
        .from( Inventory, "inv",)
        .where("inv.id = :invID",{invID}).
        getOne();
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
