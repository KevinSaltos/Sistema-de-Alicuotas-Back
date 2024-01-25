import {CACHE_MANAGER, Inject, Injectable, NotFoundException} from '@nestjs/common';
import {FindOptionsWhere, ILike, Repository} from 'typeorm';
import { CoreRepositoryEnum} from '@shared/enums';
import {ReadUserDto} from '@auth/dto';
import {plainToInstance} from 'class-transformer';
import {ServiceResponseHttpModel} from '@shared/models';
import { PaginationDto } from '../dto/pagination.dto';
import { CatalogueEntity } from '../entities/catalogue.entity';
import { TimeEntity } from '../entities/time.entity';
import { CreateTimeDto } from '../dto/time/create-time.dto';
import { FilterTimeDto } from '../dto/time/filter-time.dto';
import { UpdateTimeDto } from '../dto/time/update-time.dto';
import { TimeDetailEntity } from '../entities/time-detail.entity';
import { CreateTimeDetailDto } from '../dto/time-datail/time-detail-create.dto';
import { FilterTimeDetailDto } from '../dto/time-datail/filter-time-detail.dto';
import { UpdateTimeDetailDto } from '../dto/time-datail/time-detail-update.dto';

@Injectable()
export class TimeDetailService {
    constructor(
        @Inject(CoreRepositoryEnum.TIME_DETAIL_REPOSITORY)
        private repository: Repository<TimeDetailEntity>,
    ) {
    }

    async create(payload: CreateTimeDetailDto): Promise<TimeDetailEntity> {
        const newCatalogue = this.repository.create(payload);

        return await this.repository.save(newCatalogue);
    }

    async findAll(params?: FilterTimeDetailDto): Promise<ServiceResponseHttpModel> {
        //Pagination & Filter by search
        if (params?.limit > 0 && params?.page >= 0) {
            return await this.paginateAndFilter(params);
        }

        // Filter By Type

        //All
        const data = await this.repository.findAndCount();

        return {data: data[0], pagination: {totalItems: data[1], limit: 10}};
    }

    async findOne(id: string) {
        const catalogue = await this.repository.findOne({
            where: {id},
        });

        if (!catalogue) {
            throw new NotFoundException('Catalogue not found');
        }

        return catalogue;
    }

    async findByMounth(mounth: TimeDetailEntity) {
        const catalogue = await this.repository.findOne({
            where: {mounth},
        });

        if (!catalogue) {
            throw new NotFoundException('Time not found');
        }

        return catalogue;
    }


    async update(id: string, payload: UpdateTimeDetailDto) {
        const catalogue = await this.repository.findOneBy({id});

        if (!catalogue) {
            throw new NotFoundException('Catalogue not found');
        }

        this.repository.merge(catalogue, payload);

        return this.repository.save(catalogue);
    }

    async remove(id: string): Promise<TimeDetailEntity> {
        const catalogue = await this.repository.findOneBy({id});

        if (!catalogue) {
            throw new NotFoundException('Catalogue not found');
        }

        return await this.repository.softRemove(catalogue);
    }

    async removeAll(payload: TimeDetailEntity[]): Promise<TimeDetailEntity[]> {
        return await this.repository.softRemove(payload);
    }

    private async paginateAndFilter(params: FilterTimeDetailDto) {
        let where: FindOptionsWhere<TimeDetailEntity> | FindOptionsWhere<TimeDetailEntity>[];
        where = {};
        let {page, search} = params;
        const {limit} = params;

        if (search) {
            search = search.trim();
            page = 0;
            where = [];
            where.push({mounth: ILike(`%${search}%`)});
        }

        const response = await this.repository.findAndCount({
            where,
            take: limit,
            skip: PaginationDto.getOffset(limit, page),
        });

        return {
            data: plainToInstance(ReadUserDto, response[0]),
            pagination: {limit, totalItems: response[1]},
        };
    }
}