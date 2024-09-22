import { Injectable } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import {
  IListTodoUseCaseInput,
  IListTodoUseCaseOutput,
} from './interfaces/list-todo.interface';
import { TodoEntity } from '../entities/todo.entity';

@Injectable()
export class ListTodoUseCase {
  constructor(private todoService: TodoService) {}

  async execute(input: IListTodoUseCaseInput): IListTodoUseCaseOutput {
    const filter = this.setFilters(input);

    const todos = await this.todoService.listTodo(filter);

    return todos || [];
  }

  private setFilters(
    filter: IListTodoUseCaseInput
  ): Partial<Pick<TodoEntity, 'title' | 'completed'>> {
    const _filter: ReturnType<typeof this.setFilters> = {};

    if (filter.title) {
      _filter.title = filter.title;
    }

    if (filter.completed) {
      _filter.completed = this.parseBoolean(filter.completed);
    }

    return _filter;
  }

  private parseBoolean(bool: string): boolean {
    return bool.toLowerCase() === 'true';
  }
}
