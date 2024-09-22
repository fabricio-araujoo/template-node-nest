import { TodoEntity } from '../../entities/todo.entity';

export type IUpdateTodoUseCaseInput = Partial<
  Pick<TodoEntity, 'title' | 'completed'>
> & {
  _id: string;
};

export type IUpdateTodoUseCaseOutput = Promise<TodoEntity>;
