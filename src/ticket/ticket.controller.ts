import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TicketResponseDto } from './dto/response-ticket.dto';

@ApiTags('Tickets')
@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ticket' })
  @ApiResponse({ status: 201, description: 'Ticket created successfully', type: TicketResponseDto })
  create(@Request() req, @Body() dto: CreateTicketDto) {
    const userId = req.user.id;
    return this.ticketService.create(dto, userId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tickets' })
  @ApiResponse({ status: 200, description: 'List of tickets', type: [TicketResponseDto] })
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get ticket by ID' })
  @ApiQuery({ 
    name: 'include', 
    required: false, 
    description: 'Whether to include related entities (true/false)', 
    example: 'true' 
  })
  @ApiResponse({ status: 200, description: 'Ticket found', type: TicketResponseDto })
  @ApiResponse({ status: 404, description: 'Ticket not found' })
  findOne(
    @Param('id') id: string,
    @Query('include') include: string
  ) {
    const includeRelations = include?.toLowerCase() !== 'false';
    return this.ticketService.findOne(Number(id), includeRelations);
  }
}