import {IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional} from 'class-validator';
import {
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
} from '@shared/validation';
import { CatalogueEntity } from '../../entities/catalogue.entity';
import { TimeEntity } from '../../entities/time.entity';

export class TimeDetailDto {
    @IsNotEmpty(isNotEmptyValidationOptions())
    readonly mounth: CatalogueEntity;

    @IsNotEmpty(isNotEmptyValidationOptions())
    readonly mount: number;

    @IsNotEmpty(isNotEmptyValidationOptions())
    readonly code: string;

    @IsNotEmpty(isNotEmptyValidationOptions())
    readonly pay: boolean;
}