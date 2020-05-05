import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './device.entity';
import { Client } from '../clients/client.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Device, Client])
    ],
    controllers: [
        DeviceController
    ],
    providers: [
        DeviceService
    ],
})
export class DeviceModule {};