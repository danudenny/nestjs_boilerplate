/* eslint-disable @typescript-eslint/camelcase */
import {Injectable} from "@nestjs/common";
import {IoCtl, PaginateIoctl } from "./ioctl.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Pagination } from "src/modules/__utils/pagination";
import { MinmaxDelta } from "./deltaminmax.entity";

@Injectable()
export class IoctlService {
    public paramsProc : '';

    constructor(
        @InjectRepository(IoCtl) private readonly ioCtl: Repository<IoCtl>,
        @InjectRepository(MinmaxDelta) private readonly minmaxDelta: Repository<MinmaxDelta>
    ) {}

    async paginateGetAll(paginate: Pagination): Promise<PaginateIoctl> {
        const skippedItems = (paginate.page - 1) * paginate.limit;
        console.log(skippedItems);
        const totalCount = await this.ioCtl.count();
        const ioctlResult = await this.ioCtl.createQueryBuilder()
            .orderBy('id', "DESC")
            .offset(skippedItems)
            .limit(paginate.limit)
            .getMany()

        return {
            totalCount,
            page: paginate.page,
            limit: paginate.limit,
            data: ioctlResult
        }
    }

    async getAll(): Promise<IoCtl[]> {
        return await this.ioCtl.find();
    }

    async getMinMaxDelta(paramsProc: string): Promise<any> {
        const dataRes =  await this.ioCtl.query(`call sp_minmax_delta("${paramsProc['device_in']}" , "${paramsProc['device_out']}" , "${paramsProc['start_date']}" , "${paramsProc['end_date']}" , "${paramsProc['start_time']}" , "${paramsProc['end_time']}" )`);
        const parsedDelta = JSON.parse(JSON.stringify(dataRes[0]))
        const objectParsed = parsedDelta.map(function(object) {
            const deltaIn =  object.max_kwh_in - object.min_kwh_in;
            const deltaOut = object.max_kwh_out - object.min_kwh_out;
            return {deltaIn, deltaOut};
        })
        return objectParsed;
        
    }
}