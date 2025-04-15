import { Injectable, OnModuleInit, OnModuleDestroy, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from "bcrypt";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
    await this.$connect();

    this.$use(async (params, next) => {
      if (params.model === 'User' && params.action === 'create') {
        const user = params.args.data;

        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      }

      if (params.model === 'User' && params.action === 'update') {
        const user = params.args.data;

        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      }

      return next(params);
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}