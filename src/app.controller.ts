import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @MessagePattern('notifications')
  // async getNotifications(@Payload() data: any, @Ctx() context: MqttContext) {
  //   console.log('object1111', data);
  //   console.log(context);
  // }
}
