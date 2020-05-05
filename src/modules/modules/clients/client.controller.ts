import { Controller, UseGuards } from "@nestjs/common";
import { ClientService } from "./client.service";
import { Client } from "./client.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/modules/__utils/jwt-guard";

@Crud({
    model: {
        type: Client
    },
    query: {
        limit: 10,
        alwaysPaginate: true,
        join: {
            devices: {
                eager: true,
            }
        }
    },
})

@Controller('api/client')
@UseGuards(new JwtAuthGuard())
export class ClientController implements CrudController<Client> {
    constructor (public readonly service: ClientService) {}
}