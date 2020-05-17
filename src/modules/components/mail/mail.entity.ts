import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Mail {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    smtp_auth: string;

    @ApiProperty()
    @Column()
    type: string;

    @ApiProperty()
    @Column()
    smtp_secure: string;

    @ApiProperty()
    @Column()
    host: string

    @ApiProperty()
    @Column()
    port: string

    @ApiProperty()
    @Column()
    username: string

    @ApiProperty()
    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
