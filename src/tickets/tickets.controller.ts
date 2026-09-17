import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { Ticket } from './tickets.interface.js';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) { }
    @Get()
    findAll(@Query('priority') priority?: Ticket["priority"], @Query('status') status?: Ticket["status"]) {
        return this.ticketsService.findAll(priority, status);
    }
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: Ticket["id"]) {
        return this.ticketsService.findOne(id);
    }
    @Post()
    create(@Body() payload: any) {
        return this.ticketsService.create(payload);
    }

}