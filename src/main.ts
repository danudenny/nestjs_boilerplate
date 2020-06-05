import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { ClusterService } from './modules/__utils/cluster.service';
// import * as express from 'express';
// import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Primasaver Rest API')
    .setDescription(`Rest API untuk Primasaver menggunakan NestJS dan MySQL`)
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const options2 = {
        customCss: `
        .topbar-wrapper img {content:url('https://primasaver.com//public/assets/img/logoprimasaver.png'); width:200px; height:auto; }
        .swagger-ui .topbar { background-color: #146c6d; }
    
        `
  };
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, options2);
  await app.listen(3000);
}
bootstrap();
// ClusterService.clusterize(bootstrap);
