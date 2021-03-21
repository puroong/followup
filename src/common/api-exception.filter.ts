import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from './response.dto';

@Catch()
export class ApiExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    if(exception instanceof HttpException) return super.catch(exception, host);
    
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const typedException = exception as Error;

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      ...new Response("", false, typedException.message)
    });
  }
}
