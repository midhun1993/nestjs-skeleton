"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const Crypto = require("crypto");
const config_1 = require("@nestjs/config");
let UserService = class UserService {
    constructor(user, configService) {
        this.user = user;
        this.configService = configService;
        this.EncryptionSecret = this.configService.get("PASSWORD_SALT");
    }
    async add(userData) {
        let passwordPlain = userData.password;
        userData.password = Crypto.pbkdf2Sync(passwordPlain, this.EncryptionSecret, 1000, 64, `sha512`).toString(`hex`);
        const user = this.user(userData);
        return user.save();
    }
    async findByEmail(email) {
        return this.user.findOne({
            email: email
        }).exec();
    }
    async loginWithCredential(email, password) {
        return this.user.findOne({
            email: email,
            password: Crypto.pbkdf2Sync(password, this.EncryptionSecret, 1000, 64, `sha512`).toString(`hex`)
        }).select([
            "_id",
            "firstName",
            "lastName",
            "email"
        ]);
    }
    findAll() {
        return this.user.find().select([
            "_id",
            "firstName",
            "lastName",
            "email"
        ]).exec();
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, config_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map