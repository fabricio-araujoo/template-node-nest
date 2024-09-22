import { TodoEntity } from '../../entities/todo.entity';

export type IDeleteTodoUseCaseInput = {
  _id: string;
};

export type IDeleteTodoUseCaseOutput = Promise<
  Pick<TodoEntity, 'title' | 'completed'>
>;
