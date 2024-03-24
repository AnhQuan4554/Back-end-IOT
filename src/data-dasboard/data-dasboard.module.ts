import { Module } from '@nestjs/common';
import { DataDasboardService } from './data-dasboard.service';
import { DataDasboardController } from './data-dasboard.controller';
@Module({
  controllers: [DataDasboardController],
  providers: [DataDasboardService],
})
export class DataDasboardModule {}
