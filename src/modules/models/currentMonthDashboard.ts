import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('current_month_dashboard')
export class CurrentMonthDashboard {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    device_id: string

    @Column()
    month_periode: string

    @Column({
        type: "decimal",
        precision: 5,
        scale: 2,
        default: 0
    })
    min_kwh: number

    @Column({
        type: "decimal",
        precision: 5,
        scale: 2,
        default: 0
    })
    max_kwh: number

    @Column({
        type: "datetime"
    })
    min_time: string

    @Column({
        type: "datetime"
    })
    max_time: string
}