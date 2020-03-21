import { IsNotEmpty, IsString, IsEmail, IsAlphanumeric } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateUser {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    createdDate: string;
}

export {
    CreateUser 
};