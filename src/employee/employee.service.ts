import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './employee.model';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Empleado) private readonly EmpRepo: Repository<Empleado>){ }

    public async addEmp() {

    }
}
