import { Controller, UseGuards, Get, Param, Post, Put, Body, Delete } from "@nestjs/common";
import { ApiBearerAuth, ApiTags, ApiOkResponse, ApiUnauthorizedResponse, ApiParam, ApiBody } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/__utils/jwt-guard";
import { BillingService } from "./billing.service";
import { Billing } from "./billing.entity";
import { UpdateResult, DeleteResult } from "typeorm";

@Controller('/billing')
@ApiTags('💰 Billing')
@ApiBearerAuth()
@UseGuards(new JwtAuthGuard())
export class BillingController {
    constructor(private billingService: BillingService) {}

    @Get('/')
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Success Get All'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async index(): Promise<Billing[]> {
        return await this.billingService.getAll()
    }

    @Get('/:id')
    @ApiParam({ name: 'id' })
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Success Get All'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async show(@Param('id') id): Promise<Billing> {
        return await this.billingService.findOne(id)
    }

    @Post('/')
    @ApiBody({ type: Billing })
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Success Create Billing'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async store(billing: Billing): Promise<Billing[]> {
        return await this.billingService.create(billing)
    }

    @Put('/:id')
    @ApiParam({ name: 'id' })
    @ApiBody({ type: Billing })
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Success Update'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async update(@Param('id') id, @Body() billing: Billing): Promise<UpdateResult> {
        return await this.billingService.update(id, billing)
    }

    @Delete('/:id')
    @ApiParam({ name: 'id' })
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Success Delete'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async delete(@Param('id') id): Promise<DeleteResult> {
        return await this.billingService.delete(id)
    }

}