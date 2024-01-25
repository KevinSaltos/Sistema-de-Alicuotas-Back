import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    Put,
    Query
} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {ResponseHttpModel} from '@shared/models';
import { TimeService } from '../services/time.services';
import { CreateTimeDto } from '../dto/time/create-time.dto';
import { FilterTimeDto } from '../dto/time/filter-time.dto';
import { UpdateTimeDto } from '../dto/time/update-time.dto';
import { TimeEntity } from '../entities/time.entity';

@ApiTags('Catalogues')
@Controller('time')
export class TimeController {
    constructor(private timeService: TimeService) {
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: CreateTimeDto) {
        const data = await this.timeService.create(payload);

        return {
            data,
            message: 'created',
        };
    }


    @ApiOperation({summary: 'List of catalogues'})
    // @Roles(RoleEnum.ADMIN)
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: FilterTimeDto) {
        const response = await this.timeService.findAll(params);
        return {
            data: response.data,
            pagination: response.pagination,
            message: `index`,
        };
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.timeService.findOne(id);
        return {
            data,
            message: `show ${id}`,
            title: `Success`,
        } as ResponseHttpModel;
    }

    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(@Param('id', ParseUUIDPipe) id: string, @Body() payload: UpdateTimeDto) {
        const data = await this.timeService.update(id, payload);

        return {
            data: data,
            message: `Time updated ${id}`,
            title: `Updated`,
        } as ResponseHttpModel;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.timeService.remove(id);

        return {
            data,
            message: `Time deleted ${id}`,
            title: `Deleted`,
        };
    }

    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: TimeEntity[]) {
        const data = await this.timeService.removeAll(payload);

        return {
            data,
            message: `Times deleted`,
            title: `Deleted`,
        };
    }
}