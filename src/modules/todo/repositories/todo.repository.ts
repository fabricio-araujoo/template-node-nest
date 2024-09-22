import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Todo, TodoDocument } from '../schemas/todo.schema';
import { TodoEntity } from '../entities/todo.entity';

@Injectable()
export class TodoRepository {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async list(filter?: Partial<TodoEntity>): Promise<Todo[]> {
    return this.todoModel.find({
      ...filter,
      title: { $regex: filter?.title || '', $options: 'i' },
    });
  }

  async findById(id: ObjectId): Promise<Todo> {
    return this.todoModel.findById(id);
  }

  async create(todo: Todo): Promise<Todo> {
    return this.todoModel.create({
      ...todo,
    });
  }

  async update(id: ObjectId, partialData: Partial<TodoEntity>): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, partialData, { new: true });
  }

  async delete(id: ObjectId): Promise<Todo> {
    return this.todoModel.findByIdAndDelete(id);
  }
}
