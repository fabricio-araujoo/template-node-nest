import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { TodoController } from './controllers/todo.controller';
import { TodoReposity } from './repositories/todo.repository';
import { TodoService } from './services/todo.service';
import { ListTodoUseCase } from './use-cases/list-todo.use-case';
import { CreateTodoUseCase } from './use-cases/create-todo.use-case';
import { DeleteTodoUseCase } from './use-cases/delete-todo.use-case';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [TodoController],
  providers: [
    TodoReposity,
    TodoService,
    ListTodoUseCase,
    CreateTodoUseCase,
    DeleteTodoUseCase,
  ],
  exports: [TodoService],
})
export class TodoModule {}
