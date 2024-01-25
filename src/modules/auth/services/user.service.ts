import { UserEntity } from '@auth/entities';
import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import {FindOptionsWhere, ILike, LessThan, Repository} from 'typeorm';
import {plainToInstance} from 'class-transformer';
import { ReadUserDto } from '../dto/users/read-user.dto';
import { CreateUserDto } from '../dto/users/create-users.dto';
import { ServiceResponseHttpModel } from '@shared/models';
import { FilterUserDto } from '../dto/users/filter-user.dto';
import { SeedUserDto } from '../dto/users/seeder-user.dto';
import { UpdateUserDto } from '@auth/dto';


@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private repository: Repository<UserEntity>
    ) {
    }

    async create(payload: CreateUserDto | SeedUserDto): Promise<UserEntity> {
        const newUser = this.repository.create(payload);
        return await this.repository.save(newUser);
    }

    async findAll(params?: FilterUserDto): Promise<ServiceResponseHttpModel> {
        // const relations = {roles: true, careers: true};
        // //Pagination & Filter by Search
        // if (params?.limit > 0 && params?.page >= 0) {
        //     return await this.paginateAndFilter(params, relations);
        // }
        // //Other filters
        // if (params?.birthdate) {
        //     return this.filterByBirthdate(params.birthdate);
        // }

        //All
        const response = await this.repository.findAndCount({
           // relations,
            order: {updatedAt: 'DESC'},
        });

        return {
            data: response[0],
            pagination: {totalItems: response[1], limit: 10},
        };
    }

    async findOne(id: string): Promise<UserEntity> {
        const user = await this.repository.findOne({
            where: {id},
            //relations: {roles: true, identificationType:true},
            select: {password: false},
        });

        if (!user) {
            throw new NotFoundException('Usuario no encontrado (find one)');
        }

        return user;
    }

    async update(id: string, payload: UpdateUserDto): Promise<UserEntity> {
        const user = await this.repository.preload({id, ...payload});

        if (!user) {
            throw new NotFoundException('Usuario no encontrado para actualizar');
        }

        this.repository.merge(user, payload);

        return await this.repository.save(user);
    }

    async remove(id: string): Promise<ReadUserDto> {
        const user = await this.repository.findOneBy({id});

        if (!user) {
            throw new NotFoundException('Usuario no encontrado para eliminar');
        }

        const userDeleted = await this.repository.softRemove(user);

        return plainToInstance(ReadUserDto, userDeleted);
    }

    async isUniqueEmail(email:any): Promise<boolean> {
        const existingUser = await this.repository.findOne(email);
        return !existingUser;
      }
}