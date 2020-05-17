import {
    Controller,
    UseGuards,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete
} from '@nestjs/common';
import {
    JwtAuthGuard
} from 'src/modules/__utils/jwt-guard';
import {
    Panel
} from './panel.entity';
import {
    PanelService
} from './panel.service';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOkResponse,
    ApiUnauthorizedResponse,
    ApiParam,
    ApiBody
} from '@nestjs/swagger';
import {
    UpdateResult,
    DeleteResult
} from 'typeorm';

@ApiTags('⛽ Panel')
@ApiBearerAuth()
@Controller('api/panel')
@UseGuards(new JwtAuthGuard())
export class PanelController {
    constructor(private panelService: PanelService) {}

    @ApiBearerAuth()
    @Get('/')
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Get All'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async index(): Promise < Panel[] > {
        return await this.panelService.getAll();
    }

    @ApiBearerAuth()
    @Get('/:id')
    @ApiParam({
        name: 'id'
    })
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Get All'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async show(@Param('id') id): Promise < Panel > {
        return await this.panelService.findOne(id);
    }

    @ApiBearerAuth()
    @Post('/')
    @ApiBody({
        type: Panel
    })
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Create'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async store(@Body() panel: Panel): Promise < any > {
        return await this.panelService.create(panel);
    }

    @ApiBearerAuth()
    @Put('/:id')
    @ApiParam({
        name: 'id'
    })
    @ApiBody({
        type: Panel
    })
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Update'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async update(@Param('id') id, @Body() panel: Panel): Promise < UpdateResult > {
        return await this.panelService.update(id, panel);
    }

    @ApiBearerAuth()
    @Delete('/:id')
    @ApiParam({
        name: 'id'
    })
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Delete'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async delete(@Param('id') id): Promise < DeleteResult > {
        return await this.panelService.delete(id);
    }


}