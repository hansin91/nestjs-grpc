import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class UserGrpcController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService')
  login(data: User): User {
    return this.userService.login(data);
  }
}