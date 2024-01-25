import { Global, Module } from '@nestjs/common';
import { CataloguesSeeder } from './seeders/catalogue.seeders';
import { DatabaseSeeder } from './seeders/database.seeder';
import { DetailSeeder } from './seeders/time-detail.seeders';
import { TimeSeeder } from './seeders/time-seeder';
import { UserSeeder } from './seeders/user.seeders';
import { LoteSeeder } from './seeders/lote.seeders';

@Global()
@Module({
  providers: [
    DatabaseSeeder,
    UserSeeder,
    CataloguesSeeder,
    DetailSeeder,
    TimeSeeder,
    LoteSeeder,
  ],
  exports: [
    DatabaseSeeder,
    CataloguesSeeder,
    DetailSeeder,
    TimeSeeder,
    UserSeeder,
    LoteSeeder,
  ],
})
export class DatabaseModule {}
