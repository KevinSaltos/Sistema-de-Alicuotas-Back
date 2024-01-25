import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseSeeder } from './database/seeders/database.seeder';
import { ResponseHttpModel } from './shared/models/response-http.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private databaseSeeder: DatabaseSeeder) {}

  @Get('init')
  async init(): Promise<ResponseHttpModel> {
    await this.databaseSeeder.run();

    return {
      data: true,
      message: '',
      title: '',
    };
  }
}
