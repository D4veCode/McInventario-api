import { Controller, Get, Put, Delete, Post, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { DonorService } from './donor.service';
import { DonorDTO } from './donor.dto';

@Controller('donante')
export class DonorController {

    constructor(private donService : DonorService) {}

    ///////GETTERS///////
    
    @Get('/all')
    async getDonorList(@Res() res) {
        const don = await this.donService.getDonorList();
        if (don != null)
            return res.status(HttpStatus.OK).json({data: don})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Data no encontrada"})
    }

    @Get('/row/:id')
    async getDonor(@Param('id') id : Number, @Res() res) {
        const don = await this.donService.getDonor(id);
        if (don != null)
            return res.status(HttpStatus.OK).json({data: don})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Registro no existente"})
    }

    ///////POSTS///////

    @Post('/create')
    async createDon(@Res() res, @Body() donorDTO : DonorDTO) {
        const don = await this.donService.createDon(donorDTO)
        if (don != null)
            return res.status(HttpStatus.OK).json({message: "Registro exitoso", data: don})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Fallo de registro"})   
    }

    ///////PUTS///////

    @Put('/update/:id')
    async updateDon(@Res() res, @Body() donorDTO : DonorDTO,@Param('id') id : string) {
        const don = await this.donService.updateDon(donorDTO, Number(id))
        if (don != null)
            return res.status(HttpStatus.OK).json({message: "Cambio exitoso", data: don})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Registro no existente"})   
    }

    ///////DELETES///////

    @Delete('/delete/:id')
    async deleteDon(@Param('id') id : string, @Res() res) {
        const don = await this.donService.deleteDon(Number(id));
        if (don != null)
            return res.status(HttpStatus.OK).json({message: "data eliminada exitosamente", data: don})
        else 
            return res.status(HttpStatus.NOT_FOUND).json({message: "Registro no existente"})
    }

}
