import { Injectable } from '@nestjs/common';
import { CataloguesService } from '../../modules/core/services/catalogues.service';
import { TimeService } from 'src/modules/core/services/time.services';
import { CreateTimeDto } from 'src/modules/core/dto/time/create-time.dto';
import { TimeDetailService } from 'src/modules/core/services/time-detail.service';

@Injectable()
export class TimeSeeder {
  constructor(
    private timeService: TimeService,
    private cataloguesService: CataloguesService,
    private detailService: TimeDetailService,
  ) {}
  async run() {
    await this.createTime();
  }

  private async createTime() {
    const year = (await this.cataloguesService.findAll()).data;

    const primer = year.find((año) => {
      return año.name === '2014';
    });

    const segundo = year.find((año) => {
      return año.name === '2016';
    });

    const tercer = year.find((año) => {
      return año.name === '2017';
    });

    const cuarto = year.find((año) => {
      return año.name === '2018';
    });

    const quinto = year.find((año) => {
      return año.name === '2019';
    });

    const sexto = year.find((año) => {
      return año.name === '2020';
    });

    const septimo = year.find((año) => {
      return año.name === '2021';
    });

    const octavo = year.find((año) => {
      return año.name === '2022';
    });

    const noveno = year.find((año) => {
      return año.name === '2023';
    });

    const detail = (await this.detailService.findAll()).data;

    const detail1 = detail.find((detail) => {
      return detail.code === '1';
    });
    const detail2 = detail.find((detail) => {
      return detail.code === '2';
    });
    const detail3 = detail.find((detail) => {
      return detail.code === '3';
    });
    const detail4 = detail.find((detail) => {
      return detail.code === '4';
    });
    const detail5 = detail.find((detail) => {
      return detail.code === '5';
    });
    const detail6 = detail.find((detail) => {
      return detail.code === '6';
    });
    const detail7 = detail.find((detail) => {
      return detail.code === '7';
    });
    const detail8 = detail.find((detail) => {
      return detail.code === '8';
    });
    const detail9 = detail.find((detail) => {
      return detail.code === '9';
    });
    const detail10 = detail.find((detail) => {
      return detail.code === '10';
    });
    const detail11 = detail.find((detail) => {
      return detail.code === '11';
    });
    const detail12 = detail.find((detail) => {
      return detail.code === '12';
    });



    const catalogues: CreateTimeDto[] = [];
    catalogues.push(
      {
        year: primer,
        detail: detail12,
      },
      {
        year: segundo,
        detail: detail12,
      },
      {
        year: tercer,
        detail: detail12,
      },
      {
        year: cuarto,
        detail: detail1,
      },
    );

    for (const catalogue of catalogues) {
      await this.timeService.create(catalogue);
    }
  }
}
