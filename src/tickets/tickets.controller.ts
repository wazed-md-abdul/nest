import { Controller, Get } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
    @Get()
    findAll(): string {
        return "all tickets";
    }

}
