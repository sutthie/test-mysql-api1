/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserService} from './user.service';
import { UserController } from './user.controller';
import { Users } from 'src/user/user';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    controllers: [UserController],
    providers: [UserService],    
})
export class UserModule {}
