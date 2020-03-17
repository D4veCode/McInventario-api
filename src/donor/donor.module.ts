import { Module } from '@nestjs/common';
import { DonorService } from './donor.service';
import { Donor } from './donor.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Donor])],
  providers: [DonorService],
  exports: [DonorService]
})
export class DonorModule {}
