import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mail } from './mail.entity';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([Mail])
    ],
    controllers: [
        MailController
    ],
    providers: [
        MailService
    ],
})
export class MailModule {}
