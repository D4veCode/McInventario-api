import { Injectable, InternalServerErrorException} from '@nestjs/common';
import { Employee } from './employee.model';
import { User } from "../auth/user.model";
import { RegistrationDTO } from './registration.dto';
import { AuthService } from '../auth/auth.service';
import { EmployeeDTO } from './employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private readonly empRepo : Repository<Employee>){}

    public async addEmp(employee: Employee) {
        await this.empRepo.save(employee);
    }
}
