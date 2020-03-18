import { Injectable} from '@nestjs/common';
import { Employee } from './employee.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeDTO } from './employee.dto';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private readonly empRepo : Repository<Employee>){}

    public async addEmp(employee: Employee) {
        await this.empRepo.save(employee);
    }

    public async allEmployees(){
        return await this.empRepo.find({relations: ['user']}).then(emps => emps.map(emp => EmployeeDTO.FromEntity(emp)));
    }
}
