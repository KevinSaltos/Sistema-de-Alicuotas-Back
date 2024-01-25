import {IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional} from 'class-validator';
import {
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
} from '@shared/validation';
import { CatalogueEntity } from '../../entities/catalogue.entity';
import { TimeDetailEntity } from '../../entities/time-detail.entity';

export class TimeDto {
    @IsNotEmpty(isNotEmptyValidationOptions())
    readonly year: CatalogueEntity;

    @IsNotEmpty(isNotEmptyValidationOptions())
    readonly detail: TimeDetailEntity;
}