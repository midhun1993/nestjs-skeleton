import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class AddTest {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: String;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    age: Number; 

}

export {
    AddTest
};