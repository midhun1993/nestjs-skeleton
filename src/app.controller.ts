import { Controller, Get, Post, HttpException, HttpStatus, BadRequestException, Body, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {  AddTest } from './app.dto';
import { AuthenticationGuard } from 'src/core/common/authentication.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get()
  getHello(): any {
    return {
      "yeah" :"do"
    };
  }

  @Post('add')
  putSomeData(@Body() addTest : AddTest): any {
    console.log(addTest);
    return {
      "success" : true
    }
  }
}
