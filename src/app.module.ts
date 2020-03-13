import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from "./employee/employee.model";
import { User } from './auth/user.model';

@Module({
  imports: [EmployeeModule, AuthModule, TypeOrmModule.forFeature([User, Employee]), TypeOrmModule.forRoot()]
})
export class AppModule {
}
