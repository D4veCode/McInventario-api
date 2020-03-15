import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { User } from './user.model';
import { EmployeeService } from '../employee/employee.service';
import { RegistrationDTO } from './dto/registration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDTO } from './dto/login.dto';



@Injectable()
export class AuthService {
    constructor(@Inject('EmployeeService') private readonly EmpService: EmployeeService,
        @InjectRepository(User) private readonly userRepo: Repository<User>) { }

    public async registerEmployee(registerData: RegistrationDTO): Promise<Object> {


        const data: RegistrationDTO = new RegistrationDTO(registerData);
        const userExists: User = await this.userRepo.findOne({ where: { correo: data.correo } });

        if (userExists) {
            throw new ConflictException('Correo ya utilizado. Por favor, intente con otro.');
        }

        let user: User = await this.userRepo.save(data.toUser());

        await this.EmpService.addEmp(data.toEmployee(user));

        return { "message": 'Empleado registrado' }
    }

    public async login(loginDTO: LoginDTO){
        
    }
}
