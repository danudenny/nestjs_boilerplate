import { Controller, UseGuards, Get, Param, Body, Post, Put, Delete } from "@nestjs/common";
import { ClientService } from "./client.service";
import { Client } from "./client.entity";
import { JwtAuthGuard } from "src/modules/__utils/jwt-guard";
import { ApiTags, ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse, ApiParam, ApiBody } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('🙇 Client')
@Controller('api/client')
@ApiBearerAuth()
@UseGuards(new JwtAuthGuard())
export class ClientController {
    constructor (private clientService: ClientService) {}

    @ApiBearerAuth()
    @Get('/')
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async getAll(): Promise<Client[]> {
        return await this.clientService.getDevices();
    }

    @ApiBearerAuth()
    @Get('/:id')
    @ApiParam({name : 'id'})
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async getById(@Param('id') id): Promise<Client[]> {
        return await this.clientService.getById(id);
    }

    @ApiBearerAuth()
    @Post('/')
    @ApiBody({ type: Client })
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Create Client'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async create(@Body() client: Client): Promise<Client[]> {
        return await this.clientService.create(client);
    }

    @ApiBearerAuth()
    @Put('/:id')
    @ApiParam({ name: 'id' })
    @ApiBody({ type: Client })
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Update Client'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async update(@Param('id') id,@Body() client: Client): Promise<Client[]> {
        return await this.clientService.update(id, client);
    }

    @ApiBearerAuth()
    @Delete('/:id')
    @ApiParam({ name: 'id' })
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Delete Client'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async delete(@Param('id') id): Promise<Client[]> {
        return await this.clientService.delete(id);
    }
}