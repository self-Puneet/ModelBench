import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './auth/auth.module.js';
import { DataSource } from 'typeorm';
import { UserEntity } from './auth/user.entity.js';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.DATABASE_URL,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      entities: [UserEntity]
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
