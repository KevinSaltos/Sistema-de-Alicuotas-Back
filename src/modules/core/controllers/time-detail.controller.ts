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
import { TimeDetailService } from '../services/time-detail.service';
import { CreateTimeDetailDto } from '../dto/time-datail/time-detail-create.dto';
import { FilterTimeDetailDto } from '../dto/time-datail/filter-time-detail.dto';
import { UpdateTimeDetailDto } from '../dto/time-datail/time-detail-update.dto';
import { TimeDetailEntity } from '../entities/time-detail.entity';

@ApiTags('time-detail')
@Controller('time-detail')
export class TimeDetailController {
    constructor(private timeDetailService: TimeDetailService) {
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: CreateTimeDetailDto) {
        const data = await this.timeDetailService.create(payload);

        return {
            data,
            message: 'created',
        };
    }


    @ApiOperation({summary: 'List of TimeDetails'})
    // @Roles(RoleEnum.ADMIN)
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: FilterTimeDetailDto) {
        const response = await this.timeDetailService.findAll(params);
        return {
            data: response.data,
            pagination: response.pagination,
            message: `index`,
        };
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.timeDetailService.findOne(id);
        return {
            data,
            message: `show ${id}`,
            title: `Success`,
        } as ResponseHttpModel;
    }

    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(@Param('id', ParseUUIDPipe) id: string, @Body() payload: UpdateTimeDetailDto) {
        const data = await this.timeDetailService.update(id, payload);

        return {
            data: data,
            message: `TimeDetail updated ${id}`,
            title: `Updated`,
        } as ResponseHttpModel;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.timeDetailService.remove(id);

        return {
            data,
            message: `TimeDetail deleted ${id}`,
            title: `Deleted`,
        };
    }

    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: TimeDetailEntity[]) {
        const data = await this.timeDetailService.removeAll(payload);

        return {
            data,
            message: `TimeDetails deleted`,
            title: `Deleted`,
        };
    }
}