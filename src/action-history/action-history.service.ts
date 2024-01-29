import { Injectable } from '@nestjs/common';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';
import { UpdateActionHistoryDto } from './dto/update-action-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActionHistory } from './entities/action-history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActionHistoryService {
  constructor(
    @InjectRepository(ActionHistory)
    private actionHistory: Repository<ActionHistory>,
  ) {}
  create(createActionHistoryDto: CreateActionHistoryDto) {
    return 'This action adds a new actionHistory';
  }

  async findAll() {
    console.log(this.actionHistory.find());
    return await this.actionHistory.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} actionHistory`;
  }

  update(id: number, updateActionHistoryDto: UpdateActionHistoryDto) {
    return `This action updates a #${id} actionHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} actionHistory`;
  }
}
