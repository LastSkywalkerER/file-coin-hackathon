import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { GetUserDto } from '@/users/dto/get-user.dto';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'address' });
  }

  async validate(address: string): Promise<GetUserDto> {
    const user = await this.authService.validateUser(address);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
