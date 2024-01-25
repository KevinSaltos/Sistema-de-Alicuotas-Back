// notification.service.ts
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, OnApplicationBootstrap  } from '@nestjs/common';
import * as schedule from 'node-schedule';
import { TimeDetailService } from './time-detail.service';
import { LoteService } from './lote.service';
import { UsersService } from '@auth/services';
import { LoteDto } from '../dto/lote/lote.dto';
import { UserDto } from '@auth/dto';
import { MailService } from '../../mails/services/mail-service.';

@Injectable()
export class NotificationService implements OnApplicationBootstrap  {
    constructor(private mailService: MailService) {
      
    }
    onApplicationBootstrap() {
    this.scheduleAutomaticNotification();
  }

  private async scheduleAutomaticNotification() {


    
    const futureDate = new Date(); 
    futureDate.setSeconds(futureDate.getSeconds() + 5); 


    const job = schedule.scheduleJob(futureDate, () => {
      if(futureDate.getDate() > 15 && futureDate.getDate() < 30 ){
        this.mailService.example()
      }
    });
  }
}
