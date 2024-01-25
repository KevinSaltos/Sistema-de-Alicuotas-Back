import {IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional} from 'class-validator';
import {
    isEnumValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    minLengthValidationOptions,
} from '@shared/validation';
export class CatalogueDto {
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly code: string;

    @IsString(isStringValidationOptions())
    readonly name: string;

    @IsNumber({}, isNumberValidationOptions())
    readonly sort: number;
}