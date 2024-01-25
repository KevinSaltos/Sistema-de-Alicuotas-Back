import {DataSource} from 'typeorm';

import { CoreRepositoryEnum } from '@shared/enums';
import { CatalogueEntity } from '../entities/catalogue.entity';
import { TimeEntity } from '../entities/time.entity';
import { TimeDetailEntity } from '../entities/time-detail.entity';
import { LoteEntity } from '../entities/lote.entity';

export const coreProviders = [
    {
        provide: CoreRepositoryEnum.CATALOGUE_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(CatalogueEntity),
        inject: [DataSource],
    },
    {
        provide: CoreRepositoryEnum.TIME_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TimeEntity),
        inject: [DataSource],
    },
    {
        provide: CoreRepositoryEnum.TIME_DETAIL_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TimeDetailEntity),
        inject: [DataSource],
    },
    {
        provide: CoreRepositoryEnum.LOTE_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(LoteEntity),
        inject: [DataSource],
    },
];