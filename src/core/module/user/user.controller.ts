import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { CreateUser } from './user.dto';
import { UserService } from './user.service';
@Controller('users')
export class UserController {

    constructor(
        private userService : UserService
    ){}


    @Get()
    list(){
        const users = this.userService.findAll();
        return users;        
    }


    @Post('add')
    async add(@Body() userdata : CreateUser)  {
            const IsEmailExist = await this.userService.findByEmail(userdata.email);
            if(IsEmailExist){
                throw new HttpException("Email already in use", HttpStatus.BAD_REQUEST);
            }
            const user = await this.userService.add(userdata);
            return {
                created : true,
                user
            };
      
    }

    
}
