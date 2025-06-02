import { Controller, Post, UseInterceptors, Get } from '@nestjs/common';
import { AppInterceptor } from './app.interceptor';
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
  getProfile(@User() user: UserType) {
    
    return `Id: ${user.id}
    Message: Hello ${user.name}
    Email: ${user.email}
    `
  }
}
