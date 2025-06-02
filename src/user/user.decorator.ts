import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User as userData } from './user.interface';

export const User = createParamDecorator(
  (data: userData, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
