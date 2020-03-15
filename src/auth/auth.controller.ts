import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationDTO } from './dto/registration.dto';
import {LoginDTO} from './dto/login.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    public async register(@Body() data: RegistrationDTO){
        return await this.authService.registerEmployee(data);
    }

    @Post('login')
    @HttpCode(200)
    public async login(@Body() data: LoginDTO){
        return this.authService.login(data);
    }
}
