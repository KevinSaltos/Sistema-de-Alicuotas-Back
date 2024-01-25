import { PickType } from '@nestjs/swagger';
import { UserDto } from '@auth/dto';

export class SeedUserDto extends PickType(UserDto, [
  'cellPhone',
  'identification',
  'email',
  'lastname',
  'name',
  'password',
]) {}