import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo.schema';
import { TodoController } from './todo.controller';
import { TodoService } from 'src/app/services/todo/todo.service';
import { ListTodoUseCase } from 'src/app/use-cases/todo/list-todo.use-case';
import { CreateTodoUseCase } from 'src/app/use-cases/todo/create-todo.use-case';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [TodoController],
  providers: [TodoService, ListTodoUseCase, CreateTodoUseCase],
  exports: [TodoService],
})
export class TodoModule {}
