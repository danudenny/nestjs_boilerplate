import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Client } from "../clients/client.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Billing {
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column()
    billing_name: string

    @ApiProperty()
    @Column()
    billing_number: string

    @ApiProperty()
    @Column()
    clientId: number
    
    @OneToOne(() => Client, client => client.billing)
    @JoinColumn()
    client: Client;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}