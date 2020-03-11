import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { Connection } from 'typeorm';

@Module({
  imports: [DatabaseModule, EmployeeModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
