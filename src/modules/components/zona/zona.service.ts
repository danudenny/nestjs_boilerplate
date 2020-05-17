import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Zona } from './zona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ZonaService {
    constructor(@InjectRepository(Zona) private zonaRepo: Repository<Zona>) {}

    async getAll(): Promise<Zona[]> {
        return await this.zonaRepo.find();
    }
}
