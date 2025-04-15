import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReplyDto } from './dto/create-reply.dto';

@Injectable()
export class ReplyService {
  constructor(private prisma: PrismaService) { }

  create(replyCreateDto: CreateReplyDto, userId: number) {
    return this.prisma.reply.create({
      data: {
        ...replyCreateDto,
        userId,
      },
    });
  }

  findByTicket(ticketId: number) {
    return this.prisma.reply.findMany({
      where: { ticketId },
      include: { user: true }
    });
  }
}
