import { Module } from '@nestjs/common';
import { PixController } from './pix.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PixService } from 'src/@core/application/use-cases/pix.use-case';
import { Pix } from 'src/@core/domain/entities/pix.entiy';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pix]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ],
  controllers: [PixController],
  providers: [PixService]
})
export class PixModule {}
