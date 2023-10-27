import { Module } from '@nestjs/common';
import { PixController } from './pix.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PixService } from 'src/@core/application/use-cases/pix.use-case';
import { Pix } from 'src/@core/domain/entities/pix.entiy';

@Module({
  imports: [TypeOrmModule.forFeature([Pix])],
  controllers: [PixController],
  providers: [PixService]
})
export class PixModule {}
