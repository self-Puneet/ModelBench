import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { UserEntity } from "./auth/user.entity.js";

export const typeOrmModule = TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
        type: 'mysql' as const,
        url: config.getOrThrow<string>('DATABASE_URL'),
        database: config.getOrThrow<string>('DATABASE_NAME'),
        synchronize: true,
        entities: [UserEntity],
    }),
});
