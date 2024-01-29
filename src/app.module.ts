/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSensor } from './data-sensor/entities/data-sensor.entity';
import { DataSensorModule } from './data-sensor/data-sensor.module';
import { ActionHistoryModule } from './action-history/action-history.module';
import { ActionHistory } from './action-history/entities/action-history.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '100502',
      database: 'iot',
      entities: [DataSensor, ActionHistory],
      synchronize: true,
    }),
    DataSensorModule,
    ActionHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
