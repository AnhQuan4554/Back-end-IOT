import { Injectable } from '@nestjs/common';
import { DataSensor } from './entities/data-sensor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSensorDto } from './dtos/data-sensor.dto';
@Injectable()
export class DataSensorService {
  constructor(
    @InjectRepository(DataSensor)
    private dataSensor: Repository<DataSensor>,
  ) {}
  async findAll() {
    return await this.dataSensor.find();
  }
  async findOne(id: number) {
    return await this.dataSensor.findOneBy({ id });
  }
  async create(newData: DataSensorDto) {
    const newDataSensor = await this.dataSensor.create(newData);
    const savedData = await this.dataSensor.save(newDataSensor);
    return savedData;
  }

  //   async remove(id: number): Promise<void> {
  //     await this.usersRepository.delete(id);
  //   }
}
