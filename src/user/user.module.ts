/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserService} from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from 'src/user';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService],    
})
export class UserModule {}
