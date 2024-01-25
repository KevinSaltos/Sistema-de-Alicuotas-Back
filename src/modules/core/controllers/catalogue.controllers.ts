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
    Query,
    UseGuards 
} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {ResponseHttpModel} from '@shared/models';
import { CataloguesService } from '../services/catalogues.service';
import { CreateCatalogueDto } from '../dto/catalogue/create-catalogue.dto';
import { FilterCatalogueDto } from '../dto/catalogue/filter-catalogue.dto';
import { UpdateCatalogueDto } from '../dto/catalogue/update-catalogue.dto';
import { CatalogueEntity } from '../entities/catalogue.entity';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard';

@ApiTags('Catalogues')
@Controller('catalogues')
export class CataloguesController {
    constructor(private catalogueService: CataloguesService) {
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: CreateCatalogueDto) {
        const data = await this.catalogueService.create(payload);

        return {
            data,
            message: 'created',
        };
    }


    @ApiOperation({summary: 'List of catalogues'})
    @Get()
    //@UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: FilterCatalogueDto) {
        const response = await this.catalogueService.findAll(params);
        return {
            data: response.data,
            pagination: response.pagination,
            message: `index`,
        };
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.catalogueService.findOne(id);
        return {
            data,
            message: `show ${id}`,
            title: `Success`,
        } as ResponseHttpModel;
    }

    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(@Param('id', ParseUUIDPipe) id: string, @Body() payload: UpdateCatalogueDto) {
        const data = await this.catalogueService.update(id, payload);

        return {
            data: data,
            message: `Catalogue updated ${id}`,
            title: `Updated`,
        } as ResponseHttpModel;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.catalogueService.remove(id);

        return {
            data,
            message: `Catalogue deleted ${id}`,
            title: `Deleted`,
        };
    }

    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: CatalogueEntity[]) {
        const data = await this.catalogueService.removeAll(payload);

        return {
            data,
            message: `Catalogues deleted`,
            title: `Deleted`,
        };
    }
}