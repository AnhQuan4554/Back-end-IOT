import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DataSensorService } from './data-sensor.service';
import { DataSensorDto } from './dtos/data-sensor.dto';

@Controller('data-sensor')
export class DataSensorController {
  constructor(private readonly dataSenSorService: DataSensorService) {}

  @Get()
  async findAll() {
    return this.dataSenSorService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: any) {
    return this.dataSenSorService.findOne(id);
  }
  @Post()
  async creatData(@Body() dataSensorDto: DataSensorDto) {
    return await this.dataSenSorService.create(dataSensorDto);
  }
}
