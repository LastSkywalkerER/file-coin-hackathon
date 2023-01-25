import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { config } from '@/config/config';
import { GetUserDto } from '@/users/dto/get-user.dto';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(address: string): Promise<GetUserDto | null> {
    const user = await this.usersService.getOne(address);

    if (user) {
      return user;
    }

    return null;
  }

  async login(user: GetUserDto) {
    return {
      access_token: this.jwtService.sign(user, { secret: config.jwtSecret }),
    };
  }
}
