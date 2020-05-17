import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ZonaService } from './zona.service';
import { JwtAuthGuard } from 'src/modules/__utils/jwt-guard';
import { Zona } from './zona.entity';

@Controller('/zona')
@ApiTags('🚥 Zona')
@UseGuards(new JwtAuthGuard())
@ApiBearerAuth()
export class ZonaController {
    constructor(private zonaService: ZonaService) {}

    @Get('/')
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({description: "Success get all"})
    @ApiUnauthorizedResponse({description: "Unauthorized"})
    async index(): Promise<Zona[]> {
        return await this.zonaService.getAll();
    }
}
