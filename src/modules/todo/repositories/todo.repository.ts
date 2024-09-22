import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Todo, TodoDocument } from '../schemas/todo.schema';

@Injectable()
export class TodoReposity {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async find(id: ObjectId): Promise<Todo> {
    return this.todoModel.findById(id);
  }

  async create(todo: Todo): Promise<Todo> {
    return this.todoModel.create({
      ...todo,
    });
  }

  async delete(id: ObjectId): Promise<Todo> {
    return this.todoModel.findByIdAndDelete(id);
  }
}
