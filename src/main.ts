import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe());
  
  
  const option = new DocumentBuilder()
  .setTitle("Documentation")
  .setDescription("API endpoints listing")
  .setVersion('1.0')
  .addTag("Beta")
  .build();

  const document  =  SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('docs',  app, document);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
