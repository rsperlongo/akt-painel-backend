import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import Role from './@core/domain/enum/role.enum';
import { Roles } from './users/role.decorators';
import RoleGuard from './users/role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const reflector = app.get<Reflector>(Reflector);
  app.useGlobalGuards();
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

