import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmployeeService } from '../employee/employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [AuthController],
  providers: [AuthService],

})
export class AuthModule {}
