import { IsDate, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/modules/core/dto/pagination.dto';

export class FilterUserDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly lastname: string;

  @IsOptional()
  @IsString()
  readonly name: string;
}