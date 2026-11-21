import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from "./user.interface.js";
import { CreateUserRequestDto } from "./user-request.dto.js";
import { AuthService } from "./auth.service.js";
import { UserResponseDto } from "./user-response.dto.js";


@Controller('auth')
export class AuthController {
    constructor(readonly authService: AuthService) { };

    @Post("sign-in")
    async signUp(@Body() user: CreateUserRequestDto): Promise<UserResponseDto> {
        const newUser = await this.authService.createUser(user);
        return newUser;
    }
}