import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../pagination.dto';
import { CatalogueEntity } from '../../entities/catalogue.entity';
import { TimeDetailEntity } from '../../entities/time-detail.entity';

export class FilterTimeDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly year: CatalogueEntity;

  @IsOptional()
  @IsString()
  readonly detail: TimeDetailEntity;
}