import { AppService } from './app.service';
import { AddTest } from './app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): any;
    putSomeData(addTest: AddTest): any;
}
