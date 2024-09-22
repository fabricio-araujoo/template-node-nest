import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ListTodoUseCase } from '../use-cases/list-todo.use-case';
import { CreateTodoUseCase } from '../use-cases/create-todo.use-case';
import { DeleteTodoUseCase } from '../use-cases/delete-todo.use-case';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { DeleteTodoDto } from '../dtos/delete-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(
    private listTodoUseCase: ListTodoUseCase,
    private addTodoUseCase: CreateTodoUseCase,
    private deleteTodoUseCase: DeleteTodoUseCase
  ) {}

  @Get('list')
  async listTodo() {
    return this.listTodoUseCase.execute();
  }

  @Post('create')
  async createTodo(@Body() addTodoDto: CreateTodoDto) {
    return this.addTodoUseCase.execute(addTodoDto);
  }

  @Delete('delete')
  async deleteTodo(@Body() deleteTodoDto: DeleteTodoDto) {
    return this.deleteTodoUseCase.execute(deleteTodoDto);
  }
}
