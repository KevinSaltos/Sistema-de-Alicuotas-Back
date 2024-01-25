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
import { CreateTimeDto } from '../dto/time/create-time.dto';
import { FilterTimeDto } from '../dto/time/filter-time.dto';
import { UpdateTimeDto } from '../dto/time/update-time.dto';
import { TimeEntity } from '../entities/time.entity';
import { LoteService } from '../services/lote.service';
import { CreateLoteDto } from '../dto/lote/create-lote.dto';
import { FilterLoteDto } from '../dto/lote/filter-lote.dto';
import { LoteEntity } from '../entities/lote.entity';
import { UpdateLoteDto } from '../dto/lote/update-lote.dto';

@ApiTags('Catalogues')
@Controller('lote')
export class LoteController {
    constructor(private loteService: LoteService) {
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: CreateLoteDto) {
        const data = await this.loteService.create(payload);

        return {
            data,
            message: 'created',
        };
    }


    @ApiOperation({summary: 'List of catalogues'})
    // @Roles(RoleEnum.ADMIN)
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: FilterLoteDto) {
        const response = await this.loteService.findAll(params);
        return {
            data: response.data,
            pagination: response.pagination,
            message: `index`,
        };
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.loteService.findOne(id);
        return {
            data,
            message: `show ${id}`,
            title: `Success`,
        } as ResponseHttpModel;
    }

    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(@Param('id', ParseUUIDPipe) id: string, @Body() payload: UpdateLoteDto) {
        const data = await this.loteService.update(id, payload);

        return {
            data: data,
            message: `Time updated ${id}`,
            title: `Updated`,
        } as ResponseHttpModel;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.loteService.remove(id);

        return {
            data,
            message: `Time deleted ${id}`,
            title: `Deleted`,
        };
    }

    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: LoteEntity[]) {
        const data = await this.loteService.removeAll(payload);

        return {
            data,
            message: `Times deleted`,
            title: `Deleted`,
        };
    }
}