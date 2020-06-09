/* eslint-disable @typescript-eslint/camelcase */
import {Controller, Get, UseGuards, Query, HttpException, HttpStatus, Body, Param} from "@nestjs/common";
import {IoctlService} from "./ioctl.service";
import {JwtAuthGuard} from "../../__utils/jwt-guard";
import {ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse, ApiQuery, ApiParam} from "@nestjs/swagger";
import {IoCtl, PaginateIoctl} from "./ioctl.entity";
import { Pagination } from "src/modules/__utils/pagination";
import { empty } from "rxjs";

@ApiTags('⚡ IOctl')
@ApiBearerAuth()
@Controller('api/ioctl')
@UseGuards(new JwtAuthGuard())
export class IoCtlController {
    public deltaIn: string;
    public deltaOut: string;
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

    @Get('deltakwh')
    @ApiBearerAuth()
    @ApiQuery(
        {
            name: "end_time",
            description: "End Time",
            required: false,
            type: String
        },
        
    )
    @ApiQuery(
        {
            name: "start_time",
            description: "Start Time",
            required: false,
            type: String
        },
        
    )
    @ApiQuery(
        {
            name: "end_date",
            description: "End Date",
            required: false,
            type: String
        },
        
    )
    @ApiQuery(
        {
            name: "start_date",
            description: "Start Date",
            required: false,
            type: String
        },
        
    )
    @ApiQuery(
        {
            name: "device_out",
            description: "Device Out",
            required: false,
            type: String
        },
        
    )
    @ApiQuery(
        {
            name: "device_in",
            description: "Device In",
            required: false,
            type: String
        },
        
    )
    @UseGuards(new JwtAuthGuard())
    @ApiOkResponse({description: 'Success Get All'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async deltakwh(@Query() paramsProc: string): Promise<any> {
        const dataDeltakwh = await this.ioctlService.getMinMaxDelta(paramsProc);
        if(dataDeltakwh) {
            return dataDeltakwh
        } else {
            throw new HttpException({
                message: 'No Data Available',
              }, HttpStatus.FORBIDDEN);
        }
        
    }

}