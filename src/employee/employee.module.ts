import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.model';
import { User } from '../auth/user.model';
import { DatabaseModule } from '../database/database/database.module';
import { AuthService } from '../auth/auth.service';




@Module({
  imports: [],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService]
})
export class EmployeeModule {}
