import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductDTO } from "./product.dto";
import { Product } from "../product/product.model";

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private readonly prodRepo : Repository<Product>){}

    public async getProd(id : Number): Promise<Product> {
        const prod = await this.prodRepo.findOne({where : {id}});
        return prod;
    }

    public async getProdList(): Promise<Product[]> {
        const prod = await this.prodRepo.find();
        return prod;
    }

    public async createProdInv( newProd : Product ): Promise<Product> {
        //const prod = await this.getProd((await this.prodRepo.save(newProd)).id);
        const prod = await this.prodRepo.save(newProd);
        return prod;
    }

    public async createProd( prodDTO : ProductDTO ): Promise<Product> {
        const data : ProductDTO = new ProductDTO(prodDTO)
        const prod = await this.prodRepo.save(data.toProduct());
        return prod;
    }

    async updateProd(prodDTO : ProductDTO, prodID : Number) :  Promise<Product>{
        const data:ProductDTO = new ProductDTO(prodDTO);
        await this.prodRepo.createQueryBuilder()
        .update(Product)
        .set({ 
            nombre : data.nombre,
            marca : data.marca,
            gr_paq : data.gr_paq,
            tipo : data.tipo
            })
        .where("id = :prodID", { prodID })
        .execute();
        const prod = await this.getProd(prodID);
        return prod;
    }

    async deleteProd(prodID : Number) : Promise<Product>{
        const prod = await this.getProd(prodID);
        this.prodRepo.createQueryBuilder()
        .delete()
        .from(Product)
        .where("id = :prodID" , { prodID })
        .execute();
        return prod;
    }
}
