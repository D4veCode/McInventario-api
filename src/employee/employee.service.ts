import { Injectable, InternalServerErrorException} from '@nestjs/common';
import { Employee } from './employee.model';
import { User } from "../auth/user.model";
import { RegistrationDTO } from './registration.dto';
import { AuthService } from '../auth/auth.service';
import { EmployeeDTO } from './employee.dto';

@Injectable()
export class EmployeeService {

    public async addEmp(data: EmployeeDTO) {

        const Emp : Employee = new Employee();

        Emp.nombre = data.nombre;
        Emp.apellido = data.apellido;
        Emp.CI = data.CI;
        Emp.cargo = data.cargo;
        Emp.user = data.user;

        await Emp.save()

        console.log(Emp)
    }
}
