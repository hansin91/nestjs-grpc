import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  const logger = new Logger();

  await app.startAllMicroservicesAsync();
  await app.listen(3001);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();