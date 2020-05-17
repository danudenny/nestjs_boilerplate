import { Controller, UseGuards, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DeviceService } from './device.service';
import { Device } from './device.entity';
import { JwtAuthGuard } from 'src/modules/__utils/jwt-guard';
import { ApiTags, ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
// import { AuthGuard } from '@nestjs/passport';

@ApiTags('🖥 Device')
@ApiBearerAuth()
@Controller('api/device')
@UseGuards(new JwtAuthGuard())
export class DeviceController {
    constructor(private deviceService: DeviceService) {}

    @ApiBearerAuth()
    @Get('/')
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async index(): Promise<Device[]> {
      return await this.deviceService.getAll();
    }

    @ApiBearerAuth()
    @Get('/:id')
    @ApiParam({ name: 'id' })
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async show(@Param('id') id): Promise<Device> {
      return await this.deviceService.findOne(id);
    }

    @ApiBearerAuth()
    @Post('/')
    @ApiBody({ type: Device })
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({description: 'Sucess Create'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async store(@Body() device: Device): Promise<Device[]> {
      return await this.deviceService.create(device);
    }

    @ApiBearerAuth()
    @Put('/:id')
    @ApiParam({ name: 'id' })
    @ApiBody({ type: Device })
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({description: 'Sucess Update'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async update(@Param('id') id,@Body() device: Device): Promise<Device[]> {
      return await this.deviceService.update(id, device);
    }

    @ApiBearerAuth()
    @Delete('/:id')
    @ApiParam({ name: 'id' })
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({description: 'Sucess Delete'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async delete(@Param('id') id): Promise<DeleteResult> {
      return await this.deviceService.delete(id);
    }


}
