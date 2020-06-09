import { Entity, PrimaryColumn } from "typeorm"

@Entity()
export class MinmaxDelta {
    @PrimaryColumn()
    id: number
    device_in: string
    device_out: string
    start_date: string
    end_date: string
    start_time: string
    end_time: string
}