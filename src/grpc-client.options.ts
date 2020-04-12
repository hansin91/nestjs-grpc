import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['hero', 'user'],
    protoPath: [
        join(__dirname, '../proto/hero.proto'),
        join(__dirname, '../proto/user.proto'),
      ],
  },
};