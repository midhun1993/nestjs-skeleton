import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { LoginCredential } from './authentication.dto';


@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService:AuthenticationService,
    ){}

    @Post('login')
    async login(@Body() loginCredential: LoginCredential){
       const user = await this.authenticationService.doAuthentication(loginCredential.username, loginCredential.password);
       if(user == null ){
           throw new HttpException("Invalid Credentials", HttpStatus.BAD_REQUEST);
       }
       return  user;
        
    }
}
