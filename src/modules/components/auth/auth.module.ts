import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { UserService } from '../users/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/modules/__utils/jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: "primasaver2020",
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService, JwtStrategy],
    exports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
})
export class AuthModule {};