"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdDate: String
}, {
    versionKey: false,
    collection: 'users'
});
exports.UserSchema = UserSchema;
//# sourceMappingURL=user.schema.js.map