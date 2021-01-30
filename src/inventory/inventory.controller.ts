import { Controller, Get, Put, Delete, Post, Param, Res, HttpStatus, Body } from '@nestjs/common';

import { InventoryDTO } from "./inventory.dto";
import { InventoryService } from "./inventory.service";

@Controller('inventario')
export class InventoryController {

    constructor(private invService : InventoryService) {}

    ///////GETTERS///////
    
    @Get()
    async getInv(@Res() res) {
        const inv = await this.invService.getInv();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/entradas')
    async getInvEntries(@Res() res) {
        const inv = await this.invService.getInvEntries();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/salidas')
    async getInvEgresses(@Res() res) {
        const inv = await this.invService.getInvEgresses();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/actual')
    async getInvAct(@Res() res) {
        const inv = await this.invService.getInvAct();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/row/:id')
    async getInvSingle(@Param('id') id: string, @Res() res) {
        const inv = await this.invService.getInvSingle(Number(id));
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Registro no existente"})
    }

    ///////DELETES///////

    @Delete('/delete/:id')
    async deleteInv(@Param('id') id : string, @Res() res) {
        const inv = await this.invService.deleteInv(Number(id));
        if (inv != null)
            return res.status(HttpStatus.OK).json({message: "data eliminada exitosamente", data: inv})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Registro no existente"})
    }

    ///////POSTS///////

    @Post('/create/entrada')
    async createInvEntry(@Res() res, @Body() inventoryDTO : InventoryDTO) {
        const inv = await this.invService.createInvEntry(inventoryDTO)
        if (inv != null)
            return res.status(HttpStatus.OK).json({message: "Registro exitoso", data: inv})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Fallo de registro"})   
    }

    @Post('/create/salida') 
    async createInvEgress(@Res() res, @Body() inventoryDTO : InventoryDTO) {
        const inv = await this.invService.createInvEgress(inventoryDTO)
        if (inv != null)
            return res.status(HttpStatus.OK).json({message: "Registro exitoso", data: inv})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Fallo de registro"})       
    }

    ///////PUTS///////

    @Put('/update/:id')
    async updateInv(@Res() res, @Body() inventoryDTO : InventoryDTO,@Param('id') id : string) {
        const inv = await this.invService.updateInv(inventoryDTO, Number(id))
        if (inv != null)
            return res.status(HttpStatus.OK).json({message: "Cambio exitoso", data: inv})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Registro no existente"})   
    }

    ///////GETS-STATS///////

    @Get('/stats/entradas/productos/gramos') //top 10 productos mas donados por gr/ml
    async getTopProductsDonG(@Res() res) {
        const inv = await this.invService.getTopProductsDonG();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/entradas/productos/paquetes') //top 10 productos mas donados por paquete
    async getTopProductsDonP(@Res() res) {
        const inv = await this.invService.getTopProductsDonP();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/donantes/gramos') //top 10 donantes por gramos en productos
    async getTopDonorsG(@Res() res) {
        const inv = await this.invService.getTopDonorsG();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/donantes/paquetes') //top 10 donantes por paquetes en productos
    async getTopDonorsP(@Res() res) {
        const inv = await this.invService.getTopDonorsP();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/donantes/donaciones') //top 10 donantes por numero de donaciones
    async getTopDonorsD(@Res() res) {
        const inv = await this.invService.getTopDonorsD();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/donantes/valor') //top 10 donantes por valor de donaciones
    async getTopDonorsV(@Res() res) {
        const inv = await this.invService.getTopDonorsV();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/valor') // valor en dolares del inventario
    async getInvValor(@Res() res) {
        const inv = await this.invService.getInvValor();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/valor/alimento') //Valor en dolares en donaciones por tipo de alimento
    async getInvValorAlimento(@Res() res) {
        const inv = await this.invService.getInvValorAlimento();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/salidas/productos/gramos') //Top 10 productos mas usados por gramo
    async getTopProductsUsedG(@Res() res) {
        const inv = await this.invService.getTopProductsUsedG();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/salidas/productos/paquetes') //top productos usados del inventario por paquetes
    async getTopProductsUsedP(@Res() res) {
        const inv = await this.invService.getTopProductsUsedP();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/contratador') //top contratadores por numero de donaciones
    async getTopContratist(@Res() res) {
        const inv = await this.invService.getTopContratist();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/stats/contratador/valor') //top contratadores por valor en dolares por donaciones
    async getTopContratistV(@Res() res) {
        const inv = await this.invService.getTopContratistV();
        if (inv != null)
            return res.status(HttpStatus.OK).json({data: inv})
        else
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

}
