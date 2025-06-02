import { Controller, Post, Body, UseInterceptors, Req, Res, Get } from '@nestjs/common';
import { AppInterceptor } from './app.interceptor';
import { Request, Response } from 'express';
import { User } from './user/user.decorator';
import { User as UserType } from './user/user.interface';

@Controller('app')
export class AppController {
  

  @Post('')
  @UseInterceptors(AppInterceptor)
  helloWorld(): any {
    return 'This is responce';
  }


  @Get('/profile')
  getProfile(@User() user:UserType) {
    return `Message: Hello ${user.name}
    Email: ${user.email}
    `
  }
}
