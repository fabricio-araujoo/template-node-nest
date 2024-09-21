import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:***admin@cluster0.mr7en.mongodb.net/tarefas?retryWrites=true&w=majority&appName=Cluster0'
    ),
    TodoModule,
  ],
})
export class AppModule {}
