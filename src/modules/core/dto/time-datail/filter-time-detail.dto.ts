import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../pagination.dto';
import { CatalogueEntity } from '../../entities/catalogue.entity';
import { TimeDetailEntity } from '../../entities/time-detail.entity';

export class FilterTimeDetailDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly mounth: CatalogueEntity;

  @IsOptional()
  readonly mount: number;

  @IsOptional()
  readonly pay: boolean;
}