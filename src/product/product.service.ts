import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Product } from "../product/product.model";

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private readonly prodRepo : Repository<Product>){}

    public async findProd(id : number): Promise<Product> {
        const prod = await this.prodRepo.findOne({where : {id}});
        return prod;
    }

}
