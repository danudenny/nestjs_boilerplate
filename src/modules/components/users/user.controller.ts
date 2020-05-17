import { Controller, Get, Post, Body, Param, UseGuards, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags, ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse, ApiParam, ApiConsumes } from '@nestjs/swagger';
import { diskStorage } from  'multer';
import { extname } from  'path';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/user')
@ApiTags('👨 User')
export class UserController {
    
    constructor(private userService: UserService){}

    @ApiBearerAuth()
    @Get('/')
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async getAll(): Promise<User[]> {
        return await this.userService.getAll();
    }

    @Post('/')
    @ApiBody({ type: User })
    async createUser(@Body() user: User): Promise<any> {
        return await this.userService.createUser(user);
    }

    @ApiBearerAuth()
    @Get('/:id')
    @ApiParam({ name: 'id' })
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Sucess Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async getById(@Param() id): Promise<any> {
        return await this.userService.findById(id)
    }

    @ApiBearerAuth()
    @Delete('/:id')
    @ApiParam({ name: 'id' })
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Deleted'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async deleteUser(@Param() id): Promise<any> {
        return await this.userService.deleteUser(id)
    }

    @ApiBearerAuth()
    @Put('/:id')
    @ApiParam({ name: 'id' })
    @ApiBody({ type: User })
    @UseGuards(AuthGuard())
    @ApiOkResponse({description: 'Deleted'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async updateUser(@Param('id') id, @Body() user: User): Promise<any> {
        user.id = Number(id);
        return this.userService.update(user);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Post('/foto/:id')
    @ApiConsumes('multipart/form-data')
    @ApiParam({name: 'id'})
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './public/uploads', 
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                return cb(null, `${randomName}${extname(file.originalname)}`)
            }
        })
      })
    )
    @ApiOkResponse({description: 'Uploaded'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async uploadAvatar(@Param('id') id, @UploadedFile() file) {
      return await this.userService.setPhoto(Number(id), `${file.path}`);
    }

}