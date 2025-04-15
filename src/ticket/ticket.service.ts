import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) { }

  create(createTicketDto: CreateTicketDto, userId: number) {
    return this.prisma.ticket.create({
      data: {
        ...createTicketDto,
        userId,
      },
    });
  }

  findAll() {
    return this.prisma.ticket.findMany({
      include: { user: true, replies: true }
    });
  }

  async findOne(id: number, includeRelations = true) {
    const include = includeRelations ? { user: true, replies: true } : undefined;
  
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include,
    });
  
    if (!ticket) throw new NotFoundException("Not Found Ticket With ID :" + id);
  
    return ticket;
  }
}
