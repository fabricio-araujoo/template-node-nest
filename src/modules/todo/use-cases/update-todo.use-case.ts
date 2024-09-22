import { Injectable } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import {
  IUpdateTodoUseCaseInput,
  IUpdateTodoUseCaseOutput,
} from './interfaces/update-todo.interface';
import { ObjectId, Types } from 'mongoose';
import { TodoEntity } from '../entities/todo.entity';

@Injectable()
export class UpdateTodoUseCase {
  constructor(private todoService: TodoService) {}

  async execute(input: IUpdateTodoUseCaseInput): IUpdateTodoUseCaseOutput {
    const isValid = Types.ObjectId.isValid(input._id);

    if (!isValid) {
      throw new Error('Invalid ObjectId');
    }

    const todo = new TodoEntity(undefined, input.title, input.completed);

    const doc = await this.todoService.findTodo(
      input._id as unknown as ObjectId
    );

    todo._id = doc._id;

    const updated = await this.todoService.updateTodo(
      todo._id as unknown as ObjectId,
      {
        title: todo.title,
        completed: todo.completed,
      }
    );

    todo.title = updated.title;
    todo.completed = updated.completed;

    return todo;
  }
}
