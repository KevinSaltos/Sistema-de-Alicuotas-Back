import { CatalogueEntity } from '@core/entities';
import { IsString, IsBoolean, IsOptional, IsNotEmpty, MinLength, IsEmail, MaxLength, ArrayUnique  } from 'class-validator';
import {
  isBooleanValidationOptions,
  isEmailValidationOptions,
  isNotEmptyValidationOptions,
  isStringValidationOptions,
  maxLengthValidationOptions,
  minLengthValidationOptions,
} from 'src/shared/validation/';

export class UserDto {
  @IsOptional()
  id: string

  @IsNotEmpty()
  @MaxLength(10, maxLengthValidationOptions())
  readonly cellPhone: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  //Validar una unica cedula por usuario
  //@ArrayUnique()
  readonly identification: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsEmail({}, isEmailValidationOptions())
  @MaxLength(150, maxLengthValidationOptions())
  readonly email: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly lastname: string;

  @IsOptional()
  @IsString()
  @MinLength(8, minLengthValidationOptions())
  @MaxLength(32, minLengthValidationOptions())
  readonly password: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly name: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  readonly state: CatalogueEntity;
}
