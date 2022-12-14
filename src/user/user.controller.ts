/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Users } from 'src/user/user';
import { UserService } from './user.service';
//import { Response } from 'express';

@Controller('user')

export class UserController {
  constructor(private userService: UserService) {

  }

  @Get()
  async findAll()  {
    const response=await this.userService.findAll();
    return response;
  }

  // @Get(":id")
  // async findOne(@Param() id: number)  {
  //   const response=await this.userService.findOne(id);    
  //   return response;
  // }


  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDto: Users)  {
    const response=await this.userService.create(createUserDto);    
    return response;
  }

  @Put(":id")
  async update(@Param() id: number,@Body() createUserDto: Users)  {
    const response=await this.userService.update(id,createUserDto);    
    return response;
  }

  @Delete(":id")
  async delete(@Body() id: number)  {
    const response=await this.userService.remove(id);    
    return response;
  }  

}
