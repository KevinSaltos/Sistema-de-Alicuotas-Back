import { Injectable } from '@nestjs/common';
import { CataloguesService } from '../../modules/core/services/catalogues.service';
import { TimeService } from 'src/modules/core/services/time.services';
import { CreateTimeDto } from 'src/modules/core/dto/time/create-time.dto';
import { TimeDetailService } from 'src/modules/core/services/time-detail.service';
import { LoteService } from 'src/modules/core/services/lote.service';
import { CreateLoteDto } from 'src/modules/core/dto/lote/create-lote.dto';
import { UsersService } from '../../modules/auth/services/user.service';
import { UserEntity } from '@auth/entities';

@Injectable()
export class LoteSeeder {
  constructor(
    private loteService: LoteService,
    private usersService: UsersService,
    private timeService: TimeService,
  ) {}
  async run() {
    await this.createLote();
  }

  private async createLote() {
    const user = (await this.usersService.findAll()).data;

    const user1 = user.find((user) => {
      return user.identification === '1705681953';
    }) as UserEntity;

    const time = (await this.timeService.findAll()).data;

    const time1 = time.find((time) => {
      return time.detail.code === '12';
    });

    const catalogues: CreateLoteDto[] = [];
    catalogues.push(
      {
        user: user1,
        time: time1,
        number: 1,
      },
    );

    for (const catalogue of catalogues) {
      await this.loteService.create(catalogue);
    }
  }
}
