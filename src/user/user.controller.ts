import { Controller, Post, Inject, OnModuleInit, Body } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController implements OnModuleInit {
  constructor(@Inject('USER_PACKAGE')
    private readonly client: ClientGrpc,
              private userService: UserService) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @Post()
  login(@Body('user') user: User): User {
    return this.userService.login(user);
  }
}