import { TodoEntity } from '../../entities/todo.entity';

export type IGetTodoUseCaseInput = {
  _id: string;
};

export type IGetTodoUseCaseOutput = Promise<TodoEntity>;
