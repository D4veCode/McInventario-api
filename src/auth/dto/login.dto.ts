import { IsEmail, IsString, IsNotEmpty } from "class-validator"


export class LoginDTO {

    @IsEmail()
    @IsNotEmpty()
    correo: string
    
    @IsString()
    @IsNotEmpty()
    clave: string
}