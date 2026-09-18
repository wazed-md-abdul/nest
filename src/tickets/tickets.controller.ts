import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { FilterTicketQueryDto } from './dto/filter-ticketquery.dto.js';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) { }
    @Get()
    findAll(@Query() query: FilterTicketQueryDto) {
        const { priority, status } = query;
        return this.ticketsService.findAll(priority, status);
    }
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.ticketsService.findOne(id);
    }
    @Post()
    create(@Body() createTicketDto: CreateTicketDto) {
        return this.ticketsService.create(createTicketDto);
    }

}