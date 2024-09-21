import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoUseCase } from 'src/app/use-cases/todo/create-todo.use-case';
import { ListTodoUseCase } from 'src/app/use-cases/todo/list-todo.use-case';
import { CreateTodoDto } from 'src/interfaces/dto/todo/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(
    private listTodoUseCase: ListTodoUseCase,
    private addTodoUseCase: CreateTodoUseCase
  ) {}

  @Get('list')
  async listTodo() {
    return this.listTodoUseCase.execute();
  }

  @Post('create')
  async createTodo(@Body() addTodoDto: CreateTodoDto) {
    return this.addTodoUseCase.execute(addTodoDto);
  }
}
