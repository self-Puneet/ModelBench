import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.interface.js";
import { PasswordHasher } from "@nestjs/authentication";

@Entity({ name: "user" })
export class UserEntity implements User {

    @PrimaryGeneratedColumn("uuid", { name: "id" })
    user_id: string;

    @Column({ name: "email", nullable: false, })
    email: string;

    @Column({ name: "fullname", nullable: true })
    full_name?: string;

    @Column({ name: "phone_no", nullable: false })
    contact_number: string;

    @CreateDateColumn({ name: "created_at" })
    created_at: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updated_at: Date;

    @Column({ name: "password_hash", nullable: false, })
    passwordHash: string;
}