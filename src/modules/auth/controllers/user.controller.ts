import { UsersService } from '@auth/services';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ResponseHttpModel } from 'src/shared/models/response-http.model';
import { CreateUserDto } from '../dto/users/create-users.dto';
import { FilterUserDto } from '../dto/users/filter-user.dto';
import { UpdateUserDto } from '../dto/users/update-users.dto';
import { JwtAuthGuard } from '../guards/jwt.guard';
import {ApiOperation, ApiTags} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: CreateUserDto): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usersService.create(payload);
  
      return {
        data: serviceResponse,
        message: 'User created',
        title: 'Created',
      };
    }

    @Get()
    //@UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: FilterUserDto): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usersService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: `index`,
        title: 'Success',
      };
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usersService.findOne(id);
  
      return {
        data: serviceResponse,
        message: `show ${id}`,
        title: `Success`,
      };
    }

    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(@Param('id', ParseUUIDPipe) id: string, @Body() payload: UpdateUserDto): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usersService.update(id, payload);
  
      return {
        data: serviceResponse,
        message: `User updated ${id}`,
        title: `Updated`,
      };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usersService.remove(id);
  
      return {
        data: serviceResponse,
        message: `Usuario eliminado`,
        title: `Eliminado`,
      };
    }
}
