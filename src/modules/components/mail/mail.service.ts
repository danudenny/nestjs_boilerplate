import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Mail } from './mail.entity';

@Injectable()
export class MailService {

    constructor(@InjectRepository(Mail) private mailRepo: Repository<Mail>) {}

    async getAll(): Promise<Mail[]> {
        return await this.mailRepo.find();
    }

    async findOne(id: number): Promise<Mail> {
        return await this.mailRepo.findOne(id);
    }

    async create(mail: Mail): Promise<any> {
        return await this.mailRepo.save(mail);
    }

    async update(id: number, mail: Mail): Promise<UpdateResult> {
        return await this.mailRepo.update(id, mail);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.mailRepo.delete(id)
    }
}
