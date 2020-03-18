import { Controller, Get, Put, Delete, Post, Param, Res, HttpStatus, Body } from '@nestjs/common';

import { InventoryDTO } from "./inventory.dto";
import { InventoryService } from "./inventory.service";

@Controller('inventario')
export class InventoryController {

    constructor(private invService : InventoryService) {}

    ///////GETS///////
    
    @Get()
    async getInv(@Res() res) {
        const inv = await this.invService.getInv();
        return res.status(HttpStatus.OK).json({message: inv})
    }

    @Get('/entradas')
    getInvEntries(): string{
        return 'Retornando lista de entradas inventario';
    }

    @Get('/salidas')
    getInvEgresses(): string{
        return 'Retornando lista de salidas inventario';
    }

    @Get('/row/:id')
    getInvSingle(@Param('id') id: string): string{
        return 'Retornando row del inventario';
    }

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

    ///////POSTS///////

    @Post('/create')
    createInv(@Res() res, @Body() inventoryDTO : InventoryDTO) {
        console.log(inventoryDTO);
        return res.status(HttpStatus.OK).json({ 
            message: 'received' 
        })      
    }




}
