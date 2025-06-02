import { Controller, Post, Body, UseInterceptors, Req, Res } from '@nestjs/common';
import { AppInterceptor } from './app.interceptor';
import { Request, Response } from 'express';

@Controller('app')
export class AppController {
  

  @Post('')
  @UseInterceptors(AppInterceptor)
  helloWorld(): any {
    return 'This is responce';
  }
}
