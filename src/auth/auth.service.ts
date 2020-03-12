import { Injectable, Inject} from '@nestjs/common';
import { User } from './user.model';
import { EmployeeService } from '../employee/employee.service';
import { RegistrationDTO } from '../employee/registration.dto';
import { EmployeeDTO } from '../employee/employee.dto';



@Injectable()
export class AuthService {
    constructor(@Inject('EmployeeService') private readonly EmpService: EmployeeService){}

    public async registerEmployee(data: RegistrationDTO):Promise<Object>{
        const user: User = new User();

        const {clave, correo} = data;
        user.correo = correo;
        user.clave = clave;

        let emp: EmployeeDTO = new EmployeeDTO()

        emp = this.mapDataToEmployee(emp, data);

        await user.save();
        emp.user = user;

        this.EmpService.addEmp(emp);

        return {"message": 'Empleado registrado'}
    }

    private mapDataToEmployee(emp: EmployeeDTO, data:RegistrationDTO) : EmployeeDTO{
        emp.nombre = data.nombre;
        emp.apellido = data.apellido;
        emp.CI = data.CI;
        emp.cargo = data.cargo

        return emp;
    }
    
}
