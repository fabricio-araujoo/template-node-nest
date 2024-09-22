import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { TodoRepository } from '../repositories/todo.repository';
import { Todo } from '../schemas/todo.schema';
import { TodoEntity } from '../entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {}

  async listTodo(filter?: {
    title?: string;
    completed?: boolean;
  }): Promise<TodoEntity[]> {
    return this.todoRepository.list(filter);
  }

  async findTodo(id: ObjectId): Promise<TodoEntity> {
    return this.todoRepository.findById(id);
  }

  async findTodoByTitle(title: string): Promise<TodoEntity[]> {
    return this.todoRepository.list({ title });
  }

  async createTodo(todo: Todo): Promise<TodoEntity> {
    return this.todoRepository.create(todo);
  }

  async updateTodo(
    id: ObjectId,
    partialData: Partial<TodoEntity>
  ): Promise<TodoEntity> {
    return this.todoRepository.update(id, partialData);
  }

  async deleteTodo(id: ObjectId): Promise<TodoEntity> {
    return this.todoRepository.delete(id);
  }
}
