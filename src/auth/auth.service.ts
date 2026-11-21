import { ConflictException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity.js";
import { Repository } from "typeorm";
import { CreateUserRequestDto, UpdateUserRequestDto } from "./user-request.dto.js";
import { UserResponseDto } from "./user-response.dto.js";
import { hash, Hash } from "../common/transformer/hash.transformer.js";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) { }

    async createUser(user: CreateUserRequestDto): Promise<UserResponseDto> {
        const { password, ...rest } = user;
        const newUser = this.userRepository.create({
            ...rest,
            passwordHash: await hash(password),
        });
        const existingUser: UserEntity | null = await this.userRepository.findOneBy({ email: user.email });
        console.log(existingUser);
        if (existingUser != null) {
            throw new ConflictException('Account already existing !!!');
        }
        const createdUser = await this.userRepository.save(newUser);
        return UserResponseDto.from(createdUser);
    }    
}