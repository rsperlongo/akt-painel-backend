import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InvoiceService } from 'src/@core/application/use-cases/invoice.use-case';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
    useFactory: async (configService: ConfigService) => ({
      timeout: configService.get('HTTP_TIMEOUT'),
      maxRedirects: configService.get('HTTP_MAX_REDIRECTS')
    }),
    inject: [ConfigService],
  })],
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule {}
