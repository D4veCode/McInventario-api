import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule {}
