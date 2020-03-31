import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductDTO } from "./product.dto";
import { Product } from "../product/product.model";

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private readonly prodRepo : Repository<Product>){}

    public async getProd(id : number): Promise<Product> {
        const prod = await this.prodRepo.findOne({where : {id}});
        return prod;
    }

    public async getProdList(): Promise<Product[]> {
        const prod = await this.prodRepo.find();
        return prod;
    }

    public async createProd( newProd : Product ): Promise<Product> {
        //const prod = await this.getProd((await this.prodRepo.save(newProd)).id);
        const prod = await this.prodRepo.save(newProd);
        return prod;
    }
}
