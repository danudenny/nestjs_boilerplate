import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billing } from './billing.entity';
import { Client } from '../clients/client.entity';
import { PassportModule } from '@nestjs/passport';
import { BillingController } from './billing.controller';

@Module({
    imports:[
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([Billing, Client])
    ],
    controllers: [
        BillingController
    ],
    providers: [
        BillingService
    ],
})
export class BillingModule {};