import { PartialType } from '@nestjs/mapped-types';
import { CreateDataDasboardDto } from './create-data-dasboard.dto';

export class UpdateDataDasboardDto extends PartialType(CreateDataDasboardDto) {}
