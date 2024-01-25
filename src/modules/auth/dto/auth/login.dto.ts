import { IsNotEmpty, IsString } from 'class-validator';
import { isNotEmptyValidationOptions, isStringValidationOptions } from '@shared/validation';

export class LoginDto {
  @IsString(isStringValidationOptions())
  @IsNotEmpty(isNotEmptyValidationOptions())
  email: string;

  @IsString(isStringValidationOptions())
  @IsNotEmpty()
  password: string;
}