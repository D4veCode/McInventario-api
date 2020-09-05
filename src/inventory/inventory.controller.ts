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

    @Get('/stats/donantes/gramos')
    getTopDonorsG(): string{
        return 'Retornando top 5 donantes por gramos en productos';
    }

    @Get('/stats/donantes/paquetes')
    getTopDonorsP(): string{
        return 'Retornando top 5 donantes por paquetes en productos';
    }

    @Get('/stats/donantes/donaciones')
    getTopDonorsD(): string{
        return 'Retornando top 5 donantes por numero de donaciones';
    }

    @Get('/stats/donantes/valor')
    getTopDonorsV(): string{
        return 'Retornando top 5 donantes por valor de donaciones';
    }

    @Get('/stats/valor')
    getInvValor(): string{
        return 'Retornando valor en dolares del inventario';
    }

    @Get('/stats/valor/alimento')
    getInvValorAlimento(): string{
        return 'Retornando valor en dolares del inventario por tipo de alimento';
    }

    @Get('/stats/salidas/productos/gramos')
    getTopProductsUsedG(): string{
        return 'Retornando top productos usados del inventario por gramos';
    }

    @Get('/stats/salidas/productos/paquetes')
    getTopProductsUsedP(): string{
        return 'Retornando top productos usados del inventario por paquetes';
    }

    @Get('/stats/contratador')
    getTopContratist(): string{
        return 'Retornando top contratadores por numero';
    }

    @Get('/stats/contratador/valor')
    getTopContratistV(): string{
        return 'Retornando top contratadores por valor';
    }




}
