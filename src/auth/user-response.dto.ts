import { CreateUserRequestDto } from "./user-request.dto.js";
import { UserEntity } from "./user.entity.js";
import { User } from "./user.interface.js";

export class UserResponseDto implements User {
    user_id: string;
    email: string;
    full_name?: string | undefined;
    contact_number: string;

    static from(u: UserEntity): UserResponseDto {
        const dto = new UserResponseDto();
        dto.user_id = u.user_id;
        dto.email = u.email;
        dto.full_name = u.full_name;
        dto.contact_number = u.contact_number;
        return dto;
    }
}