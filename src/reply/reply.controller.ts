import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';

@Controller('replies')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Post()
  create(@Request() req ,@Body() dto: CreateReplyDto) {
    const userId = req.user.id
    return this.replyService.create(dto , userId);
  }

  @Get('/ticket/:ticketId')
  findByTicket(@Param('ticketId') ticketId: string) {
    return this.replyService.findByTicket(Number(ticketId));
  }
}
