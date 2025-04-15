import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReplyResponseDto } from './dto/reply-response.dto';

@ApiTags('Replies')
@Controller('replies')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Post()
  @ApiOperation({ summary: 'Create a reply for a ticket' })
  @ApiResponse({ status: 201, description: 'Reply created successfully', type: ReplyResponseDto })
  create(@Request() req, @Body() dto: CreateReplyDto) {
    const userId = req.user.id;
    return this.replyService.create(dto, userId);
  }

  @Get('/ticket/:ticketId')
  @ApiOperation({ summary: 'Get all replies for a ticket' })
  @ApiResponse({ status: 200, description: 'List of replies', type: [ReplyResponseDto] })
  findByTicket(@Param('ticketId') ticketId: string) {
    return this.replyService.findByTicket(Number(ticketId));
  }
}
