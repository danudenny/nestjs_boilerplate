import { PrimaryGeneratedColumn, Entity, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Device } from "../device/device.entity";
import { Panel } from "../panels/panel.entity";
import { Billing } from "../billing/billing.entity";
import { Zona } from "../zona/zona.entity";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    company: string;

    @ApiProperty()
    @Column()
    address: string;

    @ApiProperty()
    @Column()
    phone: string;

    @OneToOne(() => Billing, billing => billing.client)
    @JoinColumn()
    billing: Billing;

    @OneToOne(() => Zona, zona => zona.client)
    @JoinColumn()
    zona: Zona;

    @OneToMany(
        () => Device, 
        (device: Device) => device.client,
        {
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    )
    devices: Device[];

    @OneToMany(
        () => Panel, 
        (panel: Panel) => panel.client,
        {
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    )
    panels: Panel[];

}