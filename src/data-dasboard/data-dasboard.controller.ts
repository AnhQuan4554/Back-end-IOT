import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DataDasboardService } from './data-dasboard.service';
import { CreateDataDasboardDto } from './dto/create-data-dasboard.dto';
import { UpdateDataDasboardDto } from './dto/update-data-dasboard.dto';
import * as mqtt from 'mqtt';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';
@Controller('data-dasboard')
export class DataDasboardController {
  constructor(private readonly dataDasboardService: DataDasboardService) {}

  @Post()
  create(@Body() createDataDasboardDto: CreateDataDasboardDto) {
    return this.dataDasboardService.create(createDataDasboardDto);
  }

  @Get('publish')
  async publishMessage() {
    await this.dataDasboardService.publishMessage();

    return 'Message published!';
  }
  @MessagePattern('notifications')
  async getNotifications(@Payload() data: any, @Ctx() context: MqttContext) {
    console.log('content data++', data);
    console.log(`Topic: ${context.getTopic()}`);
  }
  @Get()
  findAll() {
    return this.dataDasboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataDasboardService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDataDasboardDto: UpdateDataDasboardDto,
  ) {
    return this.dataDasboardService.update(+id, updateDataDasboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataDasboardService.remove(+id);
  }
}
