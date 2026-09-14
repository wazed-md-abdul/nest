import { Injectable } from '@nestjs/common';
import { Ticket } from './tickets.interface.js';

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
    findAll() {
        return this.tickets;
    }

    findOne(id: number) {
        return this.tickets.find((ticket) => ticket.id === id);
    }
}
