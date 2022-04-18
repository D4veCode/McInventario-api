import { Controller, Get, Put, Delete, Post, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './product.dto';

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
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/row/:id')
    async getProd(@Param('id') id : Number, @Res() res) {
        const prod = await this.prodService.getProd(id);
        if (prod != null)
            return res.status(HttpStatus.OK).json({data: prod})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Registro no existente"})
    }

    ///////POSTS///////

    @Post('/create')
    async createProd(@Res() res, @Body() productDTO : ProductDTO) {
        const prod = await this.prodService.createProd(productDTO)
        if (prod != null)
            return res.status(HttpStatus.OK).json({message: "Registro exitoso", data: prod})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Fallo de registro"})   
    }

    ///////PUTS///////

    @Put('/update/:id')
    async updateInv(@Res() res, @Body() productDTO : ProductDTO,@Param('id') id : string) {
        const prod = await this.prodService.updateProd(productDTO, Number(id))
        if (prod != null)
            return res.status(HttpStatus.OK).json({message: "Cambio exitoso", data: prod})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Registro no existente"})   
    }

    ///////DELETES///////

    @Delete('/delete/:id')
    async deleteInv(@Param('id') id : string, @Res() res) {
        const prod = await this.prodService.deleteProd(Number(id));
        if (prod != null)
            return res.status(HttpStatus.OK).json({message: "data eliminada exitosamente", data: prod})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Registro no existente"})
    }

}
