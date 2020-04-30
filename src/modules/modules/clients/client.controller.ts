import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from "@nestjs/common";
import { ClientService } from "./client.service";
import { Client } from "./client.entity";
import { ApiTags, ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse, ApiParam, ApiBody } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@Controller('api/client')
@ApiTags('Clients')
export class ClientController {
    constructor (private clientService: ClientService) {}

    @Get('/')
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async getAll(): Promise<Client[]> {
        return await this.clientService.getAll();
    }

    @Post('/')
    @ApiBody({ type: Client })
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async createClient(@Body() client: Client): Promise<any> {
        return await this.clientService.create(client);
    }

    @Get('/:id')
    @ApiParam({ name: 'id' })
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async getById(@Param('id') id: number): Promise<any> {
        return await this.clientService.getById(id);
    }

    @Put('/:id')
    @ApiParam({ name: 'id' })
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async update(@Param('id') id: number, @Body() client: Client): Promise<any> {
        return await this.clientService.update(id, client);
    }

    @Delete('/:id')
    @ApiParam({ name: 'id' })
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async delete(@Param('id') id: number): Promise<any> {
        return await this.clientService.delete(id);
    }
}