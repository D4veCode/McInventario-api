import { Controller, Post, Body, HttpCode, UseGuards, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { JwtAuthGuard } from '../auth/strategies/jwt.guard';

@Controller('empleado')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}

    @UseGuards(JwtAuthGuard)
    @Get('all')
    @HttpCode(200)
    public async allEmployees(){
        return this.employeeService.allEmployees();
    }
}
