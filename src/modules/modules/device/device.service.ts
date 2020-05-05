import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from './device.entity';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class DeviceService extends TypeOrmCrudService<Device> {
    constructor(
        @InjectRepository(Device)
        public readonly deviceRepo: Repository<Device>,
      ) {
        super(deviceRepo);
      }
}
