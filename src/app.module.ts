/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type":"mysql",
    "host":"localhost",
    "port":3306,
    "username":"root",
    "password":"root",
    "database":"nestjs",
    "entities" :[UserEntity],
    "synchronize":true
   }),UserModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
