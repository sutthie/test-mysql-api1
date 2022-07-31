/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user/user';


@Injectable()
export class UserService{
    
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ){}

    findAll():Promise<Users[]>{
        return this.userRepository.find();
    }

    findOne(id:number):Promise<Users>{
        return this.userRepository.findOneBy({id : id});
      }
    // findOne(id: number):Promise<Users>{
    //     return this.userRepository.findOne({ where: { id: id } })
    // }

    create(user:Users): Promise<Users>{
        return this.userRepository.save(user);
    }

async update(id: number,user:Users){
    await this.userRepository.update(id,user);
}

async remove(id: number):Promise<void>{
    await this.userRepository.delete(id);   
}

}


