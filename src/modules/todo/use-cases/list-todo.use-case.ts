import { Injectable } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { IListTodoUseCaseOutput } from './interfaces/list-todo.interface';

@Injectable()
export class ListTodoUseCase {
  constructor(private todoService: TodoService) {}

  async execute(): IListTodoUseCaseOutput {
    const todos = await this.todoService.listTodo();

    return todos || [];
  }
}
