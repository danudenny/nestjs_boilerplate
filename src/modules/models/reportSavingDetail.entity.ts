import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { Panel } from "../components/panels/panel.entity";
import { ReportSaving } from "./reportSaving.entity";

@Entity()
export class ReportSavingDetail {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    delta_in: number

    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    delta_out: number

    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    min_kwh_in: number

    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    max_kwh_in: number

    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    min_kwh_out: number

    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    max_kwh_out: number

    @Column({
        type: "datetime"
    })
    min_time_in: string

    @Column({
        type: "datetime"
    })
    max_time_in: string

    @Column({
        type: "datetime"
    })
    min_time_out: string

    @Column({
        type: "datetime"
    })
    max_time_out: string

    @Column()
    device_in: string

    @Column()
    device_out: string

    @Column()
    reportId: number

    @Column()
    panelId: number

    @OneToOne(() => ReportSaving, reportSaving => reportSaving.reportSavingDetail)
    @JoinColumn()
    reportSaving: ReportSaving;

    @ManyToOne(() => Panel, panel => panel.devices)
    @JoinColumn({
        name: 'panelId'
    })
    panel: Panel;

}