import {Global, Module} from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './services/mail-service.';

@Global()
@Module({
    imports: [
      MailerModule.forRoot({
        transport: {
          host: 'localhost',
          port: 1025,
          ignoreTLS: true,
          secure: false,
          auth: {
            user: 'admin@correo.com',
            pass: 'admin1234',
          },
        },
        defaults: {
          from: '"No Reply" <no-reply@localhost>',
        },
        preview: true,
        template: {
          dir: process.cwd() + '/template/',
          adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
          options: {
            strict: true,
          },
        },
      }),
    ],
    controllers: [],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule {
}


