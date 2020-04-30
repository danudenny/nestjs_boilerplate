import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLogin } from '../users/user.entity';
import { ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('api/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    @ApiOkResponse({ description: 'Successful Login' })
    @ApiBadRequestResponse({ description: 'Wrong login credential' })
    async login(@Body() payload: UserLogin): Promise<any> {
        const user = await this.authService.validateUser(payload);
        return await this.authService.createToken(user);
    }
}