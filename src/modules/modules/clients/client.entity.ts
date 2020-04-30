import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

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
}