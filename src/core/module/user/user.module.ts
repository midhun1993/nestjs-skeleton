import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name : "User", schema : UserSchema}
    ])
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    ConfigService
  ],
  exports : [
    UserService
  ]
})
export class UserModule {}
