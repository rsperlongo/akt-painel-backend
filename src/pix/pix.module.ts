import { Module } from '@nestjs/common';
import { PixController } from './pix.controller';

@Module({
  controllers: [PixController]
})
export class PixModule {}
