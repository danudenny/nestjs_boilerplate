import { Controller, Get, UseGuards, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { MailService } from './mail.service';
import { Mail } from './mail.entity';
import { ApiTags, ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/__utils/jwt-guard';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('/mail')
@ApiTags('📧 Mail')
@ApiBearerAuth()
@UseGuards(new JwtAuthGuard())
export class MailController {

    constructor(private mailService: MailService) {}

    @Get('/')
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Get All'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async index(): Promise<Mail[]> {
        return await this.mailService.getAll();
    }

    @Get('/:id')
    @ApiParam({ name: 'id' })
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Get All'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async show(@Param('id') id): Promise<Mail> {
        return await this.mailService.findOne(id);
    }

    @Post('/')
    @ApiBody({ type: Mail })
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Create'
    })

    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async store(@Body() mail: Mail): Promise<Mail[]> {
        return await this.mailService.create(mail);
    }

    @Put('/:id')
    @ApiParam({ name: 'id' })
    @ApiBody({ type: Mail })
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Update'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async update(@Param('id') id, @Body() mail: Mail): Promise<UpdateResult> {
        return await this.mailService.update(id, mail);
    }

    @Delete('/:id')
    @ApiParam({ name: 'id' })
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({
        description: 'Sucess Delete'
    })
    @ApiUnauthorizedResponse({
        description: 'Unauthorized'
    })
    async delete(@Param('id') id): Promise<DeleteResult> {
        return await this.mailService.delete(id);
    }

}
