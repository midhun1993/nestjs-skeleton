import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUser } from './user.dto';
import * as Crypto from 'crypto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {

    private EncryptionSecret;

    constructor(
         @InjectModel('User') private user:Model,
         private readonly configService:ConfigService
    ){
        this.EncryptionSecret = this.configService.get("PASSWORD_SALT");
    }

    async add(userData: CreateUser) {
        let passwordPlain = userData.password;
        userData.password = Crypto.pbkdf2Sync( passwordPlain , this.EncryptionSecret, 1000, 64, `sha512`).toString(`hex`); 
        const user = this.user(userData);
        return  user.save();
        
    }
    
    async findByEmail(email: string)  {
        return  this.user.findOne({
            email : email
        }).exec();
    }

    async loginWithCredential(email : string, password : string)  {
        return  this.user.findOne({
            email : email,
            password : Crypto.pbkdf2Sync( password, this.EncryptionSecret, 1000, 64, `sha512`).toString(`hex`)
        }).select([
            "_id",
            "firstName",
            "lastName",
            "email"
        ]);
    }

    findAll(){
        return this.user.find().select([
            "_id",
            "firstName",
            "lastName",
            "email"
          ]).exec();
    }


}
