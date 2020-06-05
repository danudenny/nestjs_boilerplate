import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class IoCtl {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date'})
    date_server: string;

    @Column({type: 'time'})
    time_server: string;

    @Column({type: 'date'})
    date_kwh: string;

    @Column({type: 'time'})
    time_kwh: string;

    @Column()
    device_id: string;

    @Column({ type: "float", precision: 10, scale: 6 })
    IR: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    ISc: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    IT: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    IRMS: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VR: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VS: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VT: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VRMS: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    Freq: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    WTot: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    WhR: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    WhS: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    WhT: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VarhTot: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VarhR: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VarhS: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VarhT: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VAhTot: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VAhR: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VAhS: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    VAhT: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    kWh: number;

    @Column({ type: "float", precision: 10, scale: 6 })
    Pf: number;
}

export class PaginateIoctl {
    data: IoCtl[]
    page: number
    limit: number
    totalCount: number
}