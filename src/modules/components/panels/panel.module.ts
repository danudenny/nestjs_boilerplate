import { PanelService } from './panel.service';
import { PanelController } from './panel.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Panel } from './panel.entity';
import { PassportModule } from '@nestjs/passport';
import { Device } from '../device/device.entity';
import { Client } from '../clients/client.entity';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([Panel, Device, Client])
    ],
    controllers: [
        PanelController],
    providers: [
        PanelService],
})
export class PanelModule {};