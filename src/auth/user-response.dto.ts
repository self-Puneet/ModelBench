import { User } from "./user.interface.js";

export class UserResponseDto implements User{
    user_id: string;
    email: string;
    full_name?: string | undefined;
    contact_number: string;
}