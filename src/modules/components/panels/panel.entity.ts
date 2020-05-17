import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany
} from "typeorm";
import {
    Client
} from "../clients/client.entity";
import {
    Device
} from "../device/device.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Panel {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    serial_number: string;

    @ApiProperty()
    @Column()
    gsm_number: string;

    @ApiProperty()
    @Column()
    install_date: Date;

    @ApiProperty()
    @Column()
    capacity: number;

    @ApiProperty()
    @Column()
    start_report: Date;

    @ApiProperty()
    @Column()
    client_id: number;

    @ManyToOne(() => Client, client => client.panels)
    @JoinColumn({
        name: 'client_id'
    })
    client: Client;

    @OneToMany(
        () => Device,
        (device: Device) => device.panel, {
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    )
    devices: Device[];
}