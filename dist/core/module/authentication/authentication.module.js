"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const authentication_controller_1 = require("./authentication.controller");
const user_module_1 = require("../user/user.module");
const authentication_service_1 = require("./authentication.service");
const constants_1 = require("./constants");
const jwt_strategy_1 = require("./jwt.strategy");
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    common_1.Module({
        controllers: [
            authentication_controller_1.AuthenticationController
        ],
        imports: [
            user_module_1.UserModule,
            jwt_1.JwtModule.register({
                secret: constants_1.JwtConstants.secret,
                signOptions: {
                    expiresIn: '2 days'
                }
            })
        ],
        providers: [authentication_service_1.AuthenticationService, jwt_strategy_1.JwtStrategy],
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map