import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zona } from './zona.entity';
import { Client } from '../clients/client.entity';
import { PassportModule } from '@nestjs/passport';
import { ZonaController } from './zona.controller';
import { ZonaService } from './zona.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt'}),
        TypeOrmModule.forFeature([Zona, Client])
    ],
    controllers: [
        ZonaController
    ],
    providers: [
        ZonaService
    ],
})
export class ZonaModule {}
