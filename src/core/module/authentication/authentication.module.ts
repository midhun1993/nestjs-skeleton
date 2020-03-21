import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './authentication.controller';
import { UserModule  } from '../user/user.module';
import { AuthenticationService } from './authentication.service';
import { JwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';


@Module({
  controllers: [
    AuthenticationController
  ],
  imports : [
    UserModule,
    JwtModule.register({
      secret : JwtConstants.secret,
      signOptions : {
        expiresIn : '2 days'
      }
    })
  ],
  providers: [AuthenticationService, JwtStrategy],

})
export class AuthenticationModule {}
