import { Injectable } from '@nestjs/common';
import { Panel } from './panel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PanelService {

    constructor(@InjectRepository(Panel) private panelRepo: Repository<Panel>){}

    async getAll(): Promise<Panel[]> {
        return await this.panelRepo.find({ relations: ['devices'] });
    }

    async findOne(id: number): Promise<Panel> {
        return await this.panelRepo.findOne(id, {relations: ['devices']})
    }

    async create(panel: Panel): Promise<any> {
        return await this.panelRepo.save(panel);
    }

    async update(id: number, panel: Panel): Promise<UpdateResult> {
        return await this.panelRepo.update(id, panel);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.panelRepo.delete(id);
    }
}
