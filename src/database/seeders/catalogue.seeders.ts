import {Injectable} from '@nestjs/common';
import { CataloguesService } from 'src/modules/core/services/catalogues.service';
import { CreateCatalogueDto } from 'src/modules/core/dto/catalogue/create-catalogue.dto';

@Injectable()
export class CataloguesSeeder {
    constructor(private catalogueService: CataloguesService) {
    }
    async run() {
        await this.createMounth();
        await this.createYears();
        await this.createState()
    }


    private async createMounth() {
        const catalogues: CreateCatalogueDto[] = [];
        catalogues.push(
            {
                code: 'mes',
                name: 'Enero',
                sort: 1,
            },
            {
                code: 'mes',
                name: 'Febrero',
                sort: 2,
            },
            {
                code: 'mes',
                name: 'Marzo',
                sort: 3,
            },
            {
                code: 'mes',
                name: 'Abril',
                sort: 4,
            },
            {
                code: 'mes',
                name: 'Mayo',
                sort: 5,
            },
            {
                code: 'mes',
                name: 'Junio',
                sort: 6,
            },
            {
                code: 'mes',
                name: 'Julio',
                sort: 7,
            },
            {
                code: 'mes',
                name: 'Agosto',
                sort: 8,
            },
            {
                code: 'mes',
                name: 'Septiembre',
                sort: 9,
            },
            {
                code: 'mes',
                name: 'Octubre',
                sort: 10,
            },
            {
                code: 'mes',
                name: 'Noviembre',
                sort: 11,
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 12,
            },

        );

        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }

    private async createYears() {
        const catalogues: CreateCatalogueDto[] = [];
        catalogues.push(
            {
                code: 'año',
                name: '2014',
                sort: 1,
            },
            {
                code: 'año',
                name: '2016',
                sort: 2,
            },
            {
                code: 'año',
                name: '2017',
                sort: 3,
            },
            {
                code: 'año',
                name: '2018',
                sort: 4,
            },
            {
                code: 'año',
                name: '2019',
                sort: 5,
            },
            {
                code: 'año',
                name: '2020',
                sort: 6,
            },
            {
                code: 'año',
                name: '2021',
                sort: 7,
            },
            {
                code: 'año',
                name: '2022',
                sort: 8,
            },
            {
                code: 'año',
                name: '2023',
                sort: 9,
            },
            {
                code: 'año',
                name: '2024',
                sort: 10,
            },
        );

        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }

    private async createState() {
        const catalogues: CreateCatalogueDto[] = [];
        catalogues.push(
            {
                code: 'state',
                name: 'Habita',
                sort: 1,
            },
            {
                code: 'state',
                name: 'No habita',
                sort: 2,
            },

        );

        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
}