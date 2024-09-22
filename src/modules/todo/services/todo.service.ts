import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { TodoReposity } from '../repositories/todo.repository';
import { Todo } from '../schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoReposity) {}

  async listTodo(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  async findTodo(id: ObjectId): Promise<Todo> {
    return this.todoRepository.find(id);
  }

  async createTodo(todo: Todo): Promise<Todo> {
    return this.todoRepository.create(todo);
  }

  async deleteTodo(id: ObjectId): Promise<Todo> {
    return this.todoRepository.delete(id);
  }
}
