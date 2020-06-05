import {Controller, Get, UseGuards, Query} from "@nestjs/common";
import {IoctlService} from "./ioctl.service";
import {JwtAuthGuard} from "../../__utils/jwt-guard";
import {ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse, ApiQuery} from "@nestjs/swagger";
import {IoCtl, PaginateIoctl} from "./ioctl.entity";
import { Pagination } from "src/modules/__utils/pagination";

@ApiTags('⚡ IOctl')
@ApiBearerAuth()
@Controller('api/ioctl')
@UseGuards(new JwtAuthGuard())
export class IoCtlController {
    constructor(private ioctlService: IoctlService) {}

    @Get('/paginate')
    @ApiBearerAuth()
    @ApiQuery(
        {
            name: "page",
            description: "Page",
            required: false,
            type: Number
        },
        
    )
    @ApiQuery(
        {
            name: "limit",
            description: "Limit",
            required: false,
            type: Number
        },
        
    )
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({description: 'Success Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async paginateIoCtl(@Query() paginate: Pagination): Promise<PaginateIoctl> {
        paginate.page = Number(paginate.page)
        paginate.limit = Number(paginate.limit)
        return await this.ioctlService.paginateGetAll({
            page: paginate.page,
            limit: paginate.limit > 10 ? 10 : paginate.limit
        });
    }

    @Get('')
    @ApiBearerAuth()
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({description: 'Success Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async index(): Promise<IoCtl[]> {
        return await this.ioctlService.getAll();
    }

}