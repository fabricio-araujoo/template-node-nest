import { Injectable } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import {
  IGetTodoUseCaseInput,
  IGetTodoUseCaseOutput,
} from './interfaces/get-todo.interface';
import { ObjectId, Types } from 'mongoose';

@Injectable()
export class GetTodoUseCase {
  constructor(private todoService: TodoService) {}

  async execute(input: IGetTodoUseCaseInput): IGetTodoUseCaseOutput {
    const isValid = Types.ObjectId.isValid(input._id);

    if (!isValid) {
      throw new Error('Invalid ObjectId');
    }

    const id = input._id as unknown as ObjectId;

    const todo = await this.todoService.findTodo(id);

    return todo;
  }
}
