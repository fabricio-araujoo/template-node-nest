import { Injectable } from '@nestjs/common';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoEntity } from 'src/domain/entities/todo/todo.entity';
import { CreateTodoDto } from 'src/interfaces/dto/todo/create-todo.dto';

@Injectable()
export class CreateTodoUseCase {
  constructor(private todoService: TodoService) {}

  async execute(dto: CreateTodoDto): Promise<TodoEntity> {
    const todo = new TodoEntity(dto.title, false);

    await this.todoService.createTodo(todo);

    return todo;
  }
}
