import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { PassportModule } from '@nestjs/passport';
import { Device } from '../device/device.entity';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([Client, Device])
    ],
    controllers: [ClientController],
    providers: [ClientService],
    exports: [TypeOrmModule],
})
export class ClientModule {};