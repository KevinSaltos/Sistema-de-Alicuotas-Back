import { IsNumber, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../pagination.dto';
import { CatalogueEntity } from '../../entities/catalogue.entity';
import { TimeDetailEntity } from '../../entities/time-detail.entity';
import { UserEntity } from '@auth/entities';

export class FilterLoteDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly user: UserEntity;

  @IsOptional()
  @IsString()
  readonly time: TimeDetailEntity;

  @IsOptional()
  readonly number: number;
}