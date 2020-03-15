import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmployeeService } from '../employee/employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';
import { EmployeeModule } from '../employee/employee.module';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from "./strategies/constants";
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  imports: [
    EmployeeModule,
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '30d'}
    })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],

})
export class AuthModule { }
