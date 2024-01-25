import { Exclude, Expose } from 'class-transformer';
import { UserDto } from 'src/modules/auth/dto/users/users.dto';

@Exclude()
export class ReadUserDto extends UserDto {
  @Expose()
  readonly id;

  @Expose()
  readonly email;

  @Expose()
  readonly lastname;

  @Expose()
  readonly name;
}