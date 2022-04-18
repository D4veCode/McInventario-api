import { Employee } from "../../employee/employee.model"
import { User } from "../user.model"
import { EmployeeDTO } from "../../employee/employee.dto"
import { IsEmail, IsString, IsNumberString, IsNotEmpty } from "class-validator"


export class RegistrationDTO {

    @IsEmail()
    @IsNotEmpty()
    correo: string

    @IsString()
    @IsNotEmpty()
    clave: string

    @IsString()
    @IsNotEmpty()
    nombre: string

    @IsString()
    @IsNotEmpty()
    apellido: string

    @IsNumberString()
    @IsNotEmpty()
    ci: string

    @IsString()
    cargo?: string


    constructor(json: any){
        this.nombre = json.nombre;
        this.apellido = json.apellido;
        this.cargo = json.cargo;
        this.ci = json.ci;
        this.clave = json.clave;
        this.correo = json.correo;
    }
    /**
     * toEmployee method
     */
    public toEmployee(user: User) {
        const Emp: Employee = new Employee();

        Emp.nombre = this.nombre;
        Emp.apellido = this.apellido;
        Emp.ci = this.ci;
        Emp.cargo = this.cargo;
        Emp.user = user;
        return Emp;
    }

    /**
     * toUser method
     */
    public toUser() {
        const user: User = new User();
        user.correo = this.correo;
        user.clave = this.clave;
        return user;
    }
}