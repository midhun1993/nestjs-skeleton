import { Model } from 'mongoose';
import { CreateUser } from './user.dto';
import { ConfigService } from '@nestjs/config';
export declare class UserService {
    private user;
    private readonly configService;
    private EncryptionSecret;
    constructor(user: Model, configService: ConfigService);
    add(userData: CreateUser): Promise<any>;
    findByEmail(email: string): Promise<any>;
    loginWithCredential(email: string, password: string): Promise<any>;
    findAll(): any;
}
