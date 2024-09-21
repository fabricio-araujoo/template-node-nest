import { Injectable } from '@nestjs/common';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoEntity } from 'src/domain/entities/todo/todo.entity';

@Injectable()
export class ListTodoUseCase {
  constructor(private todoService: TodoService) {}

  async execute(): Promise<TodoEntity[]> {
    const todos = await this.todoService.listTodo();

    return todos || [];
  }
}
