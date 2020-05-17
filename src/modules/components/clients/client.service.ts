import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "./client.entity";
import { Repository } from "typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class ClientService extends TypeOrmCrudService<Client> {

    constructor(
        @InjectRepository(Client)
        public readonly clientRepo: Repository<Client>,
      ) {
        super(clientRepo);
      }

    async getAll(): Promise<Client[]> {
        return await this.clientRepo.find();
    }

    async create(client: Client): Promise<any> {
        return await this.clientRepo.save(client);
    }

    async getById(id: number): Promise<any> {
        return await this.clientRepo.findOne(id, { relations: ['devices', 'panels'] });
    }

    async update(id:number, client: Client): Promise<any> {
        return await this.clientRepo.update(id, client);
    }

    async delete(id: number): Promise<any> {
        return await this.clientRepo.delete(id);
    }

    async getDevices(): Promise<any> {
        return await this.clientRepo.find({ relations: ['devices', 'panels'] })
    }

}