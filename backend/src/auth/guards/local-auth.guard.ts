import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { GetUserDto } from '@/users/dto/get-user.dto';

import { AuthService } from '../auth.service';
import { IS_AUTH } from '../decorators/auth.decorator';

@Injectable()
export class LocalAuthGuard implements CanActivate {
  constructor(private reflector: Reflector, private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredAuth = this.reflector.getAllAndOverride<boolean>(IS_AUTH, [context.getHandler(), context.getClass()]);

    if (!requiredAuth) {
      return true;
    }

    const request = context.switchToHttp().getRequest<{ body: { address: string }; user: GetUserDto }>();

    const user = await this.authService.validateUser(request.body.address);

    if (user) {
      request.user = { address: user.address };

      return true;
    }

    return false;
  }
}
