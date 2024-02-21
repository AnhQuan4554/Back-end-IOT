import { Injectable } from '@nestjs/common';
import { CreateDataDasboardDto } from './dto/create-data-dasboard.dto';
import { UpdateDataDasboardDto } from './dto/update-data-dasboard.dto';
import * as mqtt from 'mqtt';
import { Cron, CronExpression } from '@nestjs/schedule';
@Injectable()
export class DataDasboardService {
  // private x = 0;
  // @Cron(CronExpression.EVERY_SECOND)
  // testCron() {
  //   this.x = this.x + 1;
  //   console.log('CRON++++', this.x);
  //   return this.x.toString();
  // }
  //////////////
  create(createDataDasboardDto: CreateDataDasboardDto) {
    return 'This action adds a new dataDasboard';
  }

  findAll() {
    return `This action returns all dataDasboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataDasboard`;
  }

  update(id: number, updateDataDasboardDto: UpdateDataDasboardDto) {
    return `This action updates a #${id} dataDasboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataDasboard`;
  }
  async publishMessage() {
    const brokerUrl = process.env.BROKER_URL;
    const client = await mqtt.connect(brokerUrl);
    client.on('connect', () => {
      console.log('MQTT client connected');

      // Publish a message to a topic
      const topic = 'notifications';
      const message = 'Hello, Messages+xxx+';
      client.publish(topic, message, (err) => {
        if (err) {
          console.error('Error publishing message:', err);
        } else {
          console.log('Message published successfully');
        }

        // Disconnect the client after publishing (optional)
        client.end();
      });
    });

    // this.dataDasboardService.publish(topic, message);

    return 'Message published!';
  }
}
