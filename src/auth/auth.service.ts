import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {

  constructor(
   @InjectRepository(User) private repo: Repository<User>
  ) {
  }

  signup(name: string, password: string) {
    const user = this.repo.create({name, password});

    return this.repo.save(user);
  }
}
