import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';

import { UserMiddleware } from './user/user.middleware';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
     consumer.apply(UserMiddleware).forRoutes('*');
   }
}
