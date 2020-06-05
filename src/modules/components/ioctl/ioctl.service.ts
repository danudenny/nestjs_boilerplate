import {Injectable} from "@nestjs/common";
import {IoCtl, PaginateIoctl} from "./ioctl.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Pagination } from "src/modules/__utils/pagination";

@Injectable()
export class IoctlService {
    constructor(@InjectRepository(IoCtl) private readonly ioCtl: Repository<IoCtl>) {}

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
}