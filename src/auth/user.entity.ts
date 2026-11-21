import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.interface.js";

@Entity()
export class UserEntity implements User {

    @PrimaryGeneratedColumn()
    user_id: String;

    @Column({nullable : false,})
    email: String;
    
    @Column({nullable : true,})
    full_name?: String | undefined;
    
    @Column()
    contact_number: String;
}