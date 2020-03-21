import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password: String,
    createdDate: String
},
{
    versionKey:false,
    collection:'users'
});

export {
    UserSchema
};