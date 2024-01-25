import { PickType } from '@nestjs/swagger';
import { UserDto } from 'src/modules/auth/dto/users/users.dto';

export class CreateUserDto extends PickType((UserDto), [
  'cellPhone',
  'identification',
  'email',
  'lastname',
  'password',
  'name',
  'state'
]) {}
