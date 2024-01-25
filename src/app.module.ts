import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@auth/entities';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './modules/core/core.module';
import { CatalogueEntity } from './modules/core/entities/catalogue.entity';
import { DatabaseModule } from './database/database.module';
import { TimeEntity } from './modules/core/entities/time.entity';
import { TimeDetailEntity } from './modules/core/entities/time-detail.entity';
import { LoteEntity } from './modules/core/entities/lote.entity';
import { MailModule } from './modules/mails/mail.module';
import { NotificationService } from './modules/core/services/notification.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'alicuotas',
      entities: [UserEntity, CatalogueEntity, TimeEntity, TimeDetailEntity, LoteEntity],
      //dropSchema: true,
      synchronize: true,
    }),
    DatabaseModule,
    AuthModule,
    CoreModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService, NotificationService]
})

export class AppModule {}


