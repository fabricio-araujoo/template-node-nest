import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ListTodoUseCase } from '../use-cases/list-todo.use-case';
import { CreateTodoUseCase } from '../use-cases/create-todo.use-case';
import { DeleteTodoUseCase } from '../use-cases/delete-todo.use-case';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { DeleteTodoDto } from '../dtos/delete-todo.dto';
import { GetTodoUseCase } from '../use-cases/get-todo.use-case';
import { GetTodoDto } from '../dtos/get-todo.dto';
import { ListTodoDto } from '../dtos/list-todo.dto';
import { UpdateTodoDto } from '../dtos/update-todo.dto';
import { UpdateTodoUseCase } from '../use-cases/update-todo.use-case';

@Controller('todo')
export class TodoController {
  constructor(
    private listTodoUseCase: ListTodoUseCase,
    private getTodoUseCase: GetTodoUseCase,
    private addTodoUseCase: CreateTodoUseCase,
    private updateTodoUseCase: UpdateTodoUseCase,
    private deleteTodoUseCase: DeleteTodoUseCase
  ) {}

  @Get('list')
  async listTodo(@Query() listTodoDto: ListTodoDto) {
    return this.listTodoUseCase.execute(listTodoDto);
  }

  @Get('get')
  async getTodo(@Query() getTodoDto: GetTodoDto) {
    return this.getTodoUseCase.execute(getTodoDto);
  }

  @Post('create')
  async createTodo(@Body() addTodoDto: CreateTodoDto) {
    return this.addTodoUseCase.execute(addTodoDto);
  }

  @Patch('update')
  async updateTodo(@Body() updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUseCase.execute(updateTodoDto);
  }

  @Delete('delete')
  async deleteTodo(@Body() deleteTodoDto: DeleteTodoDto) {
    return this.deleteTodoUseCase.execute(deleteTodoDto);
  }
}
