import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { User } from './user.interface';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request & { user?: User }, res: Response, next: NextFunction) {
    
    req.user = {
      id: 42,
      name: 'Alice',
      email: 'alice@example.com',
    };
    next();
  }
}
