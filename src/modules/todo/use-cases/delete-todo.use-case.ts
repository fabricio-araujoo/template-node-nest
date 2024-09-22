import { Injectable } from '@nestjs/common';
import {
  IDeleteTodoUseCaseInput,
  IDeleteTodoUseCaseOutput,
} from './interfaces/delete-todo.interface';
import { ObjectId, Types } from 'mongoose';
import { TodoService } from '../services/todo.service';

@Injectable()
export class DeleteTodoUseCase {
  constructor(private todoService: TodoService) {}

  async execute(input: IDeleteTodoUseCaseInput): IDeleteTodoUseCaseOutput {
    const isValid = Types.ObjectId.isValid(input._id);

    if (!isValid) {
      throw new Error('Invalid ObjectId');
    }

    const id = input._id as unknown as ObjectId;

    const todo = await this.todoService.deleteTodo(id);

    if (!todo) {
      throw new Error('Todo not found');
    }

    return todo;
  }
}
