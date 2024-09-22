import { TodoEntity } from '../../entities/todo.entity';

export type ICreateTodoUseCaseInput = {
  title: string;
};

export type ICreateTodoUseCaseOutput = Promise<TodoEntity>;
