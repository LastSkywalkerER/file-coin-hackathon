import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

import { GetUserDto } from '@/users/dto/get-user.dto';

import { UsersService } from '../users/users.service';

dotenv.config();

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(address: string): Promise<GetUserDto | null> {
    console.log('🚀 ~ file: auth.service.ts:17 ~ AuthService ~ validateUser ~ address', address);

    const user = await this.usersService.getOne(address);

    if (user) {
      return user;
    }

    return null;
  }

  async login(user: GetUserDto) {
    console.log('🚀 ~ file: auth.service.ts:29 ~ AuthService ~ login ~ user', user);

    return {
      access_token: this.jwtService.sign(user, { secret: process.env.JWT_SECRET }),
    };
  }
}
