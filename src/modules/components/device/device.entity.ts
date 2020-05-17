import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    JoinColumn,
    ManyToOne
} from "typeorm";
import {
    Client
} from "../clients/client.entity";
import {
    ApiProperty
} from "@nestjs/swagger";
import { Panel } from "../panels/panel.entity";

@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    device: string;

    @ApiProperty()
    @Column()
    status: number;

    @ApiProperty()
    @Column()
    in_out: number;

    @ApiProperty()
    @Column()
    clientId: number;

    @ApiProperty()
    @Column()
    panelId: number;

    @ManyToOne(() => Client, client => client.devices)
    @JoinColumn({
        name: 'clientId'
    })
    client: Client;

    @ManyToOne(() => Panel, panel => panel.devices)
    @JoinColumn({
        name: 'panelId'
    })
    panel: Panel;

}