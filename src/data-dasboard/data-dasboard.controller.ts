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
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
@Controller('data-dasboard')
@ApiTags('Data Dasboard')
export class DataDasboardController {
  constructor(private readonly dataDasboardService: DataDasboardService) {}
  private messageData = [];
  @Post()
  create(@Body() createDataDasboardDto: CreateDataDasboardDto) {
    return this.dataDasboardService.create(createDataDasboardDto);
  }

  @Get()
  findAll() {
    return this.dataDasboardService.findAll();
  }
  @Get('test-cron')
  async testCron() {
    // return await this.dataDasboardService.testCron();
  }
  @Get('publish')
  async publishMessage() {
    await this.dataDasboardService.publishMessage();

    return 'Message published!';
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
  ////

  @MessagePattern('notifications')
  async getNotifications2(@Payload() data: any, @Ctx() context: MqttContext) {
    console.log('object');
    console.log('content data++', data);
    console.log(`Topic: ${context.getTopic()}`);
    // creat data
  }
}
