import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { ReplyModule } from './reply/reply.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { FileUploadModule } from './file-upload/file-upload.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UserModule,
    TicketModule,
    ReplyModule,
    AuthModule,
    FileUploadModule,
  ],
  providers: [AppService],
})
export class AppModule { }