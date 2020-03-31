import { Controller, Get, Put, Delete, Post, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('producto')
export class ProductController {

    constructor(private prodService : ProductService) {}

    ///////GETTERS///////
    
    @Get('/all')
    async getProdList(@Res() res) {
        const prod = await this.prodService.getProdList();
        if (prod != null)
            return res.status(HttpStatus.OK).json({data: prod})
        else 
            return res.status(HttpStatus.NO_CONTENT).json({message: "Data no encontrada"})
    }

    @Get('/row/:id')
    async getProd(@Param('id') id : number, @Res() res) {
        const prod = await this.prodService.getProd(id);
        if (prod != null)
            return res.status(HttpStatus.OK).json({data: prod})
        else 
            return res.status(HttpStatus.NO_CONTENT).json({message: "Data no encontrada"})
    }

}
