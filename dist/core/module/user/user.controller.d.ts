import { CreateUser } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    list(): any;
    add(userdata: CreateUser): Promise<{
        created: boolean;
        user: any;
    }>;
}
