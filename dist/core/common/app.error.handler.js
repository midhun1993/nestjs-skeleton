"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppExceptionHandler {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        response
            .status(status)
            .json({
            statusCode: status
        });
    }
}
exports.AppExceptionHandler = AppExceptionHandler;
//# sourceMappingURL=app.error.handler.js.map