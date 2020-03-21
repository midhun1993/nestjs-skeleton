import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly userService:UserService,
        private readonly jwtService:JwtService
    ){}    

    async doAuthentication(email:string, password : string) {
        const user = await this.userService.loginWithCredential(email, password);
        if(user == null){
            return user;
        }
        const payload = {
            id: user._id,
            email: user.email 
        }
        const access_token = this.jwtService.sign(payload);
        return {
            user,
            access_token
        };
    }
}
