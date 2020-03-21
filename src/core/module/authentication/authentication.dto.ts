import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class LoginCredential {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    username:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password:string;
}

export {
    LoginCredential
}