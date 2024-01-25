import {DataSource} from 'typeorm';
import {
    UserEntity,
} from '@auth/entities';
import { AuthRepositoryEnum} from '@shared/enums';

export const authProviders = [
    {
        provide: AuthRepositoryEnum.USER_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
        inject: [DataSource],
    },
];