import { AuthenticationService } from './authentication.service';
import { LoginCredential } from './authentication.dto';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    login(loginCredential: LoginCredential): Promise<any>;
}
