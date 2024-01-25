import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { LoteService } from 'src/modules/core/services/lote.service';
import { UsersService } from '@auth/services';
import { LoteDto } from 'src/modules/core/dto/lote/lote.dto';
import { UserDto } from '@auth/dto';

@Injectable()
export class MailService {
  pay: Boolean;
  userId: string;
  constructor(
    private readonly mailerService: MailerService,
    private loteService: LoteService,
    private userService: UsersService,
  ) {}

  async example(): Promise<void> {
    const user = (await this.userService.findAll()).data as UserDto[];
    const lote = (await this.loteService.findAll()).data as LoteDto[];

    const lote1 = lote.find((time) => {
      console.log(time.time.detail.pay)
      if (time.time.detail.pay === false) {

          this.mailerService
            .sendMail({
              to: time.user.email, // list of receivers
              from: 'noreply@nestjs.com', // sender address
              subject: 'Pago de alicuotas', // Subject line
              text: 'welcome', 
              html: '<b>welcome</b>'

            })
            .then(() => {})
            .catch(() => {});
        this.userId = time.user.id;
        this.pay = time.time.detail.pay;
      }
    });

    const user1 = user.find((user) => {
      return user.id === this.userId;
    });

  }
}
