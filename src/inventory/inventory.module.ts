import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ProductModule } from '../product/product.module';
import { DonorModule } from '../donor/donor.module';



@Module({
  imports: [TypeOrmModule.forFeature([Inventory]),AuthModule,ProductModule,DonorModule],
  controllers: [InventoryController],
  providers: [InventoryService],
  exports: [InventoryService]
})
export class InventoryModule {}