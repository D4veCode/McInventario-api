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
        return res.status(HttpStatus.OK).json({message: inv})
    }

    @Get('/entradas')
    async getInvEntries(@Res() res) {
        const inv = await this.invService.getInvEntries();
        return res.status(HttpStatus.OK).json({message: inv})
    }

    @Get('/salidas')
    async getInvEgresses(@Res() res) {
        const inv = await this.invService.getInvEgresses();
        return res.status(HttpStatus.OK).json({message: inv})
    }

    @Get('/actual')
    async getInvAct(@Res() res) {
        const inv = await this.invService.getInvAct();
        return res.status(HttpStatus.OK).json({message: inv})
    }

    @Get('/row/:id')
    async getInvSingle(@Param('id') id: string, @Res() res) {
        const inv = await this.invService.getInvSingle(Number(id));
        return res.status(HttpStatus.OK).json({message: inv})
    }

    ///////POSTS///////

    @Post('/create/entrada')
    async createInvEntry(@Res() res, @Body() inventoryDTO : InventoryDTO) {
        const r = this.invService.createInvEntry(inventoryDTO)
        console.log(r)
        return res.status(HttpStatus.OK).json({ 
            message : r
        })      
    }

    @Post('/create/salida')
    createInvEgress(@Res() res, @Body() inventoryDTO : InventoryDTO) {
        console.log(inventoryDTO);
        return res.status(HttpStatus.OK).json({ 
            message: 'received' 
        })      
    }

    ///////GETS-STATS///////

    @Get('/stats/entradas/productos/gramos')
    getTopProductsDonG(): string{
        return 'Retornando top 5 productos mas donados por gramos';
    }

    @Get('/stats/entradas/productos/paquetes')
    getTopProductsDonP(): string{
        return 'Retornando top 5 productos mas donados por paquete';
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
