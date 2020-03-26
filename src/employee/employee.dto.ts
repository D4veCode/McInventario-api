import { Employee } from "./employee.model";
import { IsString } from "class-validator";
import { User } from "../auth/user.model";
import { UserDTO } from "../auth/dto/user.dto";

export class EmployeeDTO implements Readonly<EmployeeDTO>{

    id?: number

    @IsString()
    nombre: string

    @IsString()
    apellido: string

    @IsString()
    ci: string

    cargo?: string

    user?: User | any


    public static from(dto: Partial<EmployeeDTO>) {
        const emp = new EmployeeDTO()
        emp.id = dto.id;
        emp.nombre = dto.nombre;
        emp.apellido = dto.apellido;
        emp.ci = dto.ci;
        emp.user = dto.user;

        if (dto.cargo != null || dto.cargo != undefined) {
            emp.cargo = dto.cargo;
        }

        return emp;
    }

    public static FromEntity(entity: Employee) {
        return this.from({
            id: entity.id,
            nombre: entity.nombre,
            apellido: entity.apellido,
            ci: entity.ci,
            cargo: entity.cargo,
            user: new UserDTO(entity.user)
        })
    }

    public ToEntity() {
        const emp = new Employee();

        emp.nombre = this.nombre;
        emp.apellido = this.apellido;
        emp.ci = this.ci;
        if (this.cargo != null || this.cargo != undefined) {
            emp.cargo = this.cargo
        }
        emp.user = this.user;

        return emp
    }
}