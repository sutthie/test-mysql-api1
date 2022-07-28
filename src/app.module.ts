/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/user';
//import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({

  "type":"mysql",
    "host":"localhost",
    "port":3306,
    "username":"root",
    "password":"root",
    "database":"test_nest_db",
    "entities" :[Users],
    "synchronize":true
   }),TypeOrmModule.forFeature([Users])
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
