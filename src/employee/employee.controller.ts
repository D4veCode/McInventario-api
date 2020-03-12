import { Controller, Post, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { RegistrationDTO } from './registration.dto';

@Controller('empleado')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}

    @Post('register')
    addEmployee(@Body() data: RegistrationDTO){
        
    }
}
