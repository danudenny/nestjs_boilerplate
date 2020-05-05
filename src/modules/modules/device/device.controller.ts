import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import { DeviceService } from './device.service';
import { ApiTags } from '@nestjs/swagger';
import { Device } from './device.entity';
import { JwtAuthGuard } from 'src/modules/__utils/jwt-guard';

@Crud({
    model: {
      type: Device,
    },
    query: {
      limit: 10,
      alwaysPaginate: true,
    }
  })
@Controller('api/device')
@UseGuards(new JwtAuthGuard())
export class DeviceController implements CrudController<Device> {
    constructor(public readonly service: DeviceService) {}
}
