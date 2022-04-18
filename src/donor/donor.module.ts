import { Module } from '@nestjs/common';
import { DonorService } from './donor.service';
import { Donor } from './donor.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonorController } from './donor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Donor])],
  providers: [DonorService],
  exports: [DonorService],
  controllers: [DonorController]
})
export class DonorModule {}
