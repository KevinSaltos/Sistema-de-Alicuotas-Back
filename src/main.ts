import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplicationContext, ValidationPipe} from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  app.useGlobalPipes(
      new ValidationPipe({
          errorHttpStatusCode: 422,
          stopAtFirstError: true,
          whitelist: true,
          forbidNonWhitelisted: true,
          transformOptions: {
              enableImplicitConversion: true,
          },
      }),
  );
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
function useContainer(arg0: INestApplicationContext, arg1: { fallbackOnErrors: boolean; }) {
    throw new Error('Function not implemented.');
}

