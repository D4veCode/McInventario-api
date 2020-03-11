import { Empleado } from "./employee.model";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { User } from "../auth/user.model";

export class EmployeeDTO implements Readonly<EmployeeDTO>{

    @ApiProperty()
    id?: number

    @ApiProperty({ required: true })
    @IsString()
    nombre: string

    @ApiProperty({ required: true })
    @IsString()
    apellido: string

    @ApiProperty({ required: true, maxLength: 8 })
    @IsString()
    CI: string

    @ApiProperty()
    cargo?: string

    user?: User


    public static from(dto: Partial<EmployeeDTO>) {
        const emp = new EmployeeDTO()
        emp.id = dto.id;
        emp.nombre = dto.nombre;
        emp.apellido = dto.apellido;
        emp.CI = dto.CI;
        emp.user = dto.user;

        if (dto.cargo != null || dto.cargo != undefined) {
            emp.cargo = dto.cargo;
        }

        return emp;
    }

    public static FromEntity(entity: Empleado) {
        return this.from({
            id: entity.id,
            nombre: entity.nombre,
            apellido: entity.apellido,
            CI: entity.CI,
            cargo: entity.cargo,
            user: entity.user
        })
    }

    public ToEntity(user: User) {
        const emp = new Empleado();

        emp.nombre = this.nombre;
        emp.apellido = this.apellido;
        emp.CI = this.CI;
        if (this.cargo != null || this.cargo != undefined) {
            emp.cargo = this.cargo
        }
        emp.user = user;

        return emp
    }
}