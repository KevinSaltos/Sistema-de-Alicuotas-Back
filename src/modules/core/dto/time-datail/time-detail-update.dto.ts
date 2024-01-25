import { PartialType } from '@nestjs/swagger';
import { CreateTimeDetailDto } from './time-detail-create.dto';


export class UpdateTimeDetailDto extends PartialType(CreateTimeDetailDto) {}