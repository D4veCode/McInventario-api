import { Injectable, Inject} from '@nestjs/common';
import { User } from './user.model';
import { EmployeeService } from '../employee/employee.service';
import { RegistrationDTO } from '../employee/registration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class AuthService {
    constructor(@Inject('EmployeeService') private readonly EmpService: EmployeeService, 
    @InjectRepository(User) private readonly userRepo: Repository<User>){}

    public async registerEmployee(registerData: RegistrationDTO):Promise<Object>{
        
        
        const data : RegistrationDTO = new RegistrationDTO(registerData);

        let user: User = await this.userRepo.save(data.toUser());
        
        await this.EmpService.addEmp(data.toEmployee(user));

        return {"message": 'Empleado registrado'}
    }    
}
