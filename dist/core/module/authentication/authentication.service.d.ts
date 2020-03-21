import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthenticationService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    doAuthentication(email: string, password: string): Promise<any>;
}
