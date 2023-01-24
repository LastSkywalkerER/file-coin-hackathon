import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from '@/auth/auth.service';
import { Public } from '@/auth/decorators/public.decorator';
import { LocalAuthGuard } from '@/auth/guards/local-auth.guard';
import { Roles } from '@/roles/decorators/roles.decorator';
import { Roles as RolesEnum } from '@/roles/types/roles.enum';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('upgrade/:address')
  // @Roles(RolesEnum.Admin)
  async upgrade(@Param('address') address: string) {
    return this.usersService.upgrade(address);
  }

  @Public()
  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: { user: GetUserDto }) {
    return this.authService.login(req.user);
  }

  @Get(':address')
  getProfile(@Param('address') address: string) {
    return this.usersService.getOne(address);
  }

  @Get()
  // @Roles(RolesEnum.Admin)
  async getAll() {
    return this.usersService.getAll();
  }
}
