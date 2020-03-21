import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class AppExceptionHandler implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
