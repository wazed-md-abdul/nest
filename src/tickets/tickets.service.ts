import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './tickets.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';

@Injectable()
export class TicketsService {
    private readonly tickets: Ticket[] = [
        {
            id: 1,
            title: "Ticket 1",
            description: "Description 1",
            status: "open",
            priority: "high",
            createdAt: new Date(),
        },
        {
            id: 2,
            title: "Ticket 2",
            description: "Description 2",
            status: "open",
            priority: "medium",
            createdAt: new Date(),
        },
        {
            id: 3,
            title: "Ticket 3",
            description: "Description 3",
            status: "closed",
            priority: "low",
            createdAt: new Date(),
        },
        {
            id: 4,
            title: "Ticket 4",
            description: "Description 4",
            status: "open",
            priority: "medium",
            createdAt: new Date(),
        },
        {
            id: 5,
            title: "Ticket 5",
            description: "Description 5",
            status: "closed",
            priority: "high",
            createdAt: new Date(),
        },
    ];
    findAll(priority?: Ticket["priority"], status?: Ticket["status"]) {
        let tickets = this.tickets;
        if (priority) {
            tickets = tickets.filter((ticket) => ticket.priority === priority);
        }
        if (status) {
            tickets = tickets.filter((ticket) => ticket.status === status);
        }
        return tickets;
    }

    findOne(id: number) {
        const tickets = this.tickets.find((ticket) => ticket.id === id);
        if (!tickets) {
            throw new NotFoundException(`Ticket with Id ${id}  not found`)
        }
        return tickets;
    }
    create(createTicketDto: CreateTicketDto) {
        const id = this.tickets.length + 1;
        const ticket: Ticket = {
            id,
            title: createTicketDto.subject,
            description: createTicketDto.description,
            status: createTicketDto.status,
            priority: createTicketDto.priority,
            createdAt: new Date(),
        }
        this.tickets.push(ticket);
        return ticket;

    }
}
