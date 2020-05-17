import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Client } from "../clients/client.entity";

@Entity()
export class Zona {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    zona_name: string

    @Column()
    zona_desc: string

    @Column()
    latittude: string

    @Column()
    longitude: string

    @Column()
    clientId: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToOne(() => Client, client => client.zona)
    @JoinColumn()
    client: Client;
}