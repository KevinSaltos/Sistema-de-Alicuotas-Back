import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../pagination.dto';
import { CatalogueEntity } from '../../entities/catalogue.entity';

export class FilterCatalogueDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly code: string;

  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly parent: CatalogueEntity;
}