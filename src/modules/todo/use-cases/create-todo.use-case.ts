import { Injectable } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { TodoEntity } from '../entities/todo.entity';
import {
  ICreateTodoUseCaseInput,
  ICreateTodoUseCaseOutput,
} from './interfaces/create-todo.interface';

@Injectable()
export class CreateTodoUseCase {
  constructor(private todoService: TodoService) {}

  async execute(input: ICreateTodoUseCaseInput): ICreateTodoUseCaseOutput {
    const todo = new TodoEntity(undefined, input.title, false);

    const newTodo = await this.todoService.createTodo(todo);

    return newTodo;
  }
}
