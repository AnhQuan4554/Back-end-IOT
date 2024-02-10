/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Enable MQTT transport
  const mqttApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://192.168.1.9:1883',
      },
    },
  );

  // Start both the HTTP and MQTT servers
  await app.listen(3001);
  await mqttApp.listen();
}
bootstrap();
