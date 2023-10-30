import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalGuards();
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: [
      'https://sistema-boleto-server-production.up.railway.app',
      'http://localhost:4200'
    ]
  });
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

