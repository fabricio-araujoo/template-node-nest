import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    TodoModule,
  ],
})
export class AppModule {}
