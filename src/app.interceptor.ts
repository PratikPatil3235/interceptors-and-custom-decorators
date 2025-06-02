import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { map, Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (!request.body) {
      request.body = {};
    }
      request.body.name = 'custome name';
      request.body.age = 12;
      return next.handle().pipe(map((data) => {
          data = "from Interceptor";
          return data;
    }));
  }
}
