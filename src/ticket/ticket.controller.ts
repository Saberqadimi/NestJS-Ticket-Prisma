import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) { }

  @Post()
  create(@Request() req, @Body() dto: CreateTicketDto) {
    const userId = req.user.id;
    return this.ticketService.create(dto, userId);
  }


  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('include') include: string
  ) {
    const includeRelations = include?.toLowerCase() !== 'false';  
    return this.ticketService.findOne(Number(id), includeRelations);
  }
}
