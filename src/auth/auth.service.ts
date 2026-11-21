import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity.js";
import { Repository } from "typeorm";
import { CreateUserRequestDto } from "./user-request.dto.js";
import { UserResponseDto } from "./user-response.dto.js";


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) { }

    async createUser(user: CreateUserRequestDto): Promise<UserResponseDto> {
        var newUser: UserEntity = this.userRepository.create(user);
        console.log(newUser);
        await this.userRepository.save(newUser);
        return newUser as UserResponseDto;
    }
}