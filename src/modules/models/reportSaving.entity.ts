import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { ReportSavingDetail } from "./reportSavingDetail.entity";

@Entity()
export class ReportSaving {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    client_id: number
    
    @Column()
    billing_id: number
    
    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    saving: number
    
    @Column()
    periode_type: string
    
    @Column()
    periode: string
    
    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    sum_delta_in: number
    
    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    sum_delta_out: number

    @OneToOne(() => ReportSavingDetail, reportSavingDetail => reportSavingDetail.reportSaving)
    @JoinColumn()
    reportSavingDetail: ReportSavingDetail;
}