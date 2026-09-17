import { IsIn, IsOptional } from "class-validator";

export class FilterTicketQueryDto {
    @IsIn(['low', 'medium', 'high'])
    @IsOptional()
    priority?: "low" | "medium" | "high";
    @IsIn(['open', 'closed'])
    @IsOptional()
    status?: "open" | "closed";
}
