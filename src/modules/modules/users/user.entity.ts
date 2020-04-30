import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    username: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
      }
    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    photo: string;
}

export class UserLogin {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}