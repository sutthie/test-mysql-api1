/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UserEntity } from 'src/user';
import { UserService } from './user.service';

@Controller('user')

export class UserController {
  constructor(private userService: UserService) {

  }

  @Get()
  async fillAll()  {
  //async fillAll(@Res() res: Response)  {
    const response=await this.userService.findAll();
    //res.status(HttpStatus.OK).json({payload : response});
    return response;
  }

  @Get(":id")
  async findOne(@Param() id: number,@Res() res:Response)  {
    const response=await this.userService.findOne(id);    
    return response;
  }

  @Post()
  async create(@Body() createUserDto: UserEntity,@Res() res:Response)  {
    const response=await this.userService.create(createUserDto);    
    return response;
  }

  @Put(":id")
  async update(@Param() id: number,@Body() createUserDto: UserEntity,@Res() res:Response)  {
    const response=await this.userService.update(id,createUserDto);    
    return response;
  }

  @Delete(":id")
  async delete(@Body() id: number,@Res() res:Response)  {
    const response=await this.userService.remove(id);    
    return response;
  }  

}
