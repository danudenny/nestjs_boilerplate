import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Device } from "../device/device.entity";

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

    @OneToMany(
        () => Device, 
        (device: Device) => device.client,
        {
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    )
    devices: Device[];

}