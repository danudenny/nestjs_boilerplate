import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Billing } from "./billing.entity";
import { Repository, UpdateResult, DeleteResult } from "typeorm";

@Injectable()
export class BillingService {
    constructor(@InjectRepository(Billing) private billingRepo: Repository<Billing>) {}

    async getAll(): Promise<Billing[]> {
        return await this.billingRepo.find();
    }

    async findOne(id: number): Promise<Billing> {
        return await this.billingRepo.findOne(id)
    }

    async create(billings: Billing): Promise<any> {
        return await this.billingRepo.save(billings)
    }

    async update(id: number, billing: Billing): Promise<UpdateResult> {
        return await this.billingRepo.update(id, billing)
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.billingRepo.delete(id)
    }
}