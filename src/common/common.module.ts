import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ApiExceptionFilter } from './api-exception.filter';
import { ResponseInterceptor } from './response.interceptor';
import { ValidatorPipe } from './validator.pipe';

@Module({
    providers: [
        {
            provide: APP_PIPE,
            useClass: ValidatorPipe
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: ResponseInterceptor
        },
        {
            provide: APP_FILTER,
            useClass: ApiExceptionFilter
        }
    ]
})
export class CommonModule {}
