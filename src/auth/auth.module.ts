import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmployeeService } from '../employee/employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';

@Module({
  imports: [EmployeeService, TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
