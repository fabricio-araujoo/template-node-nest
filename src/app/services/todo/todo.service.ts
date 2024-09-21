import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from 'src/modules/todo/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async listTodo(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async createTodo(todo: Todo): Promise<Todo> {
    return this.todoModel.create({
      ...todo,
    });
  }
}
