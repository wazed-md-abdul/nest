export class CreateTicketDto {
    subject: string;
    description: string;
    priority: "low" | "medium" | "high";
    status: "open" | "closed";
}
