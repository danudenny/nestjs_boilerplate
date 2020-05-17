import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, Like } from 'typeorm';
import { Device } from './device.entity';

@Injectable()
export class DeviceService {
    constructor(
        @InjectRepository(Device)
        private deviceRepo: Repository<Device>,
      ) {}

    async getAll(): Promise<Device[]> {
      return await this.deviceRepo.find();
    }

    async findOne(id: number): Promise<Device> {
      return await this.deviceRepo.findOne(id)
    }

    async create(device: Device): Promise<any> {
      return await this.deviceRepo.save(device);
    }

    async update(id: number, device: Device): Promise<any> {
      return await this.deviceRepo.update(id, device);
    }

    async delete(id: number): Promise<DeleteResult> {
      return await this.deviceRepo.delete(id);
    }

    async filter(): Promise<Device[]> {
      return await this.deviceRepo.find({
        where : [{
          device : Like('%%'),
        }]
      })
    }
}
