import { IsEmail, isHash, isInt, IsOptional, IsPhoneNumber, isString, IsString, IsStrongPassword, IsUUID, MaxLength, Min, MinLength } from "class-validator";
import { User } from "./user.interface.js";
import { OmitType, PartialType } from '@nestjs/mapped-types';
import { Hash } from "../common/transformer/hash.transformer.js";
import { UserEntity } from "./user.entity.js";

export class CreateUserRequestDto extends OmitType(UserEntity, ['user_id'] as const) {

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    @MinLength(2)
    full_name?: string | undefined;

    @IsString()
    @IsPhoneNumber()
    contact_number: string;

    @IsString()
    @IsStrongPassword({ minLength: 8, minUppercase: 1, minSymbols: 1 })
    @Hash()
    password: string;
}

export class UpdateUserRequestDto extends PartialType(OmitType(CreateUserRequestDto, ['password'] as const)) { }