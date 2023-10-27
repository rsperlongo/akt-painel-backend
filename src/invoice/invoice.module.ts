import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from 'src/@core/application/use-cases/invoice.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from 'src/@core/domain/entities/invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice])],
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule {}
