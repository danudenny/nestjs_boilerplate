import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
    private readonly user: User[] = [];

    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

    async getAll() {
        return await this.userRepo.find();
    }

    async getByEmail(email: string) {
        return await this.userRepo.findOne({
            where: {
                email: email
            }
        });
    }

    async getByUsername(username: string) {
        return await this.userRepo.findOne({
            where: {
                username: username
            }
        });
    }

    async getByEmailAndPass(email: string, password: string) {
        const passHash = crypto.createHmac('sha256', password).digest('hex');
        return await this.userRepo.findOne({
            where: {
                email: email,
                password: passHash
            }
        })
      }

    async findById(id: number) {
        return await this.userRepo.findOne(id)
    }

    async createUser(user: User) {
        const duplicateEmail = await this.getByEmail(user.email);
        const duplicateUsername = await this.getByUsername(user.username);

        if(duplicateEmail) {
            throw new NotAcceptableException(
                'Email already registered',
            )
        } else if(duplicateUsername) {
            throw new NotAcceptableException(
                'Username already taken',
            )
        }
        return await this.userRepo.save(
            this.userRepo.create(user),
          );
    }

    async update(user: User): Promise<UpdateResult> {
        return await this.userRepo.update(user.id, user);
    }

    async deleteUser(id: number): Promise<DeleteResult> {
        return await this.userRepo.delete(id);
    }
}
