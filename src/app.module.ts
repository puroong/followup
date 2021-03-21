import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'followup',
      password: 'followup',
      database: 'followup',
      entities: [User],
      synchronize: true
    }),
    UsersModule,
    CommonModule,
  ],
})
export class AppModule {}
