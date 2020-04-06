import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['hero', 'user'],
    protoPath: [
        join(__dirname, './hero/hero.proto'),
        join(__dirname, './user/user.proto'),
      ],
  },
};