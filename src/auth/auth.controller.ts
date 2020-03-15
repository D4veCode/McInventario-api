import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationDTO } from './dto/registration.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    public async register(@Body() data: RegistrationDTO){
        return await this.authService.registerEmployee(data);
    }
}
