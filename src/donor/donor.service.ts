import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { DonorDTO } from "./donor.dto";
import { Donor } from "../donor/donor.model";

@Injectable()
export class DonorService {

    constructor(@InjectRepository(Donor) private readonly donRepo : Repository<Donor>){}

    public async getDonor(id : Number): Promise<Donor> {
        const don = await this.donRepo.findOne({where : {id}});
        return don;
    }  

    public async getDonorList(): Promise<Donor[]> {
        const don = await this.donRepo.find();
        return don;
    }

    public async createDonInv( newDon : Donor ): Promise<Donor> {
        const don = await this.donRepo.save(newDon);
        return don;
    }

    public async createDon( donDTO : DonorDTO ): Promise<Donor> {
        const data : DonorDTO = new DonorDTO(donDTO)
        const don = await this.donRepo.save(data.toDonor());
        return don;
    }

    async updateDon(donDTO : DonorDTO, donID : Number) :  Promise<Donor>{
        const data:DonorDTO = new DonorDTO(donDTO);
        await this.donRepo.createQueryBuilder()
        .update(Donor)
        .set({ 
            nombre : data.nombre,
            tip_id : data.tip_id,
            num_id : data.num_id,
            direccion : data.direccion
            })
        .where("id = :donID", { donID })
        .execute();
        const don = await this.getDonor(donID);
        return don;
    }

    async deleteDon(donID : Number) : Promise<Donor>{
        const don = await this.getDonor(donID);
        this.donRepo.createQueryBuilder()
        .delete()
        .from(Donor)
        .where("id = :donID" , { donID })
        .execute();
        return don;
    }

}
