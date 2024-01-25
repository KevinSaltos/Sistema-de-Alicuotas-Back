import {IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional} from 'class-validator';
import {
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
} from '@shared/validation';
import { UserEntity } from '@auth/entities';
import { TimeEntity } from '../../entities/time.entity';

export class LoteDto {
    @IsNotEmpty(isNotEmptyValidationOptions())
    readonly user: UserEntity;

    @IsNotEmpty(isNotEmptyValidationOptions())
    readonly time: TimeEntity;

    @IsNotEmpty(isNotEmptyValidationOptions())
    readonly number: number;
}