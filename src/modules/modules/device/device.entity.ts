import { PrimaryGeneratedColumn, Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { Client } from "../clients/client.entity";

@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    device: string;

    @Column()
    status: number;

    @Column()
    in_out: string;

    @Column()
    clientId: number;
    @ManyToOne(() => Client, client => client.devices)
    @JoinColumn({name: 'clientId'})
    client: Client;

}