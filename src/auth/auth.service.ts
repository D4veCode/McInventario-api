import { Injectable, Inject, ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from './user.model';
import { EmployeeService } from '../employee/employee.service';
import { RegistrationDTO } from './dto/registration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDTO } from './dto/login.dto';
import { compare } from "bcryptjs";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(@Inject('EmployeeService') private readonly EmpService: EmployeeService,
        @InjectRepository(User) private readonly userRepo: Repository<User>, private readonly jwtService :JwtService) { }

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
        const {correo, clave } = loginDTO;

        const user : User = await this.userRepo.findOne({where: {correo}});

        if(!user){
            throw new NotFoundException('Correo no registrado, intente nuevamente.');
        }

        if(!await compare(clave, user.clave)){
            throw new UnauthorizedException('Contraseña inválida. Intente nuevamente.');
        }
        const payload = {correo, id:user.id}
        return {access_token: this.jwtService.sign(payload)}
    }
}
