import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductModule } from './product/product.module';
import { DonorModule } from './donor/donor.module';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user.model';
import { Employee } from "./employee/employee.model";
import { Inventory } from "./inventory/inventory.model";
import { Product } from "./product/product.model";
import { Donor } from "./donor/donor.model";
import { Recipe } from "./recipe/recipe.model";



@Module({
  imports: [
    EmployeeModule, 
    AuthModule, 
    TypeOrmModule.forFeature([
        User, 
        Employee, 
        Inventory, 
        Product, 
        Donor, 
        Recipe
      ]), 
    TypeOrmModule.forRoot(), 
    InventoryModule, 
    ProductModule, 
    DonorModule, 
    RecipeModule
  ],
})
export class AppModule {
}
