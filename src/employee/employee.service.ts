import { Injectable} from '@nestjs/common';
import { Employee } from './employee.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private readonly empRepo : Repository<Employee>){}

    public async addEmp(employee: Employee) {
        await this.empRepo.save(employee);
    }
}
