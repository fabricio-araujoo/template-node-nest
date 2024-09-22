import { TodoEntity } from '../../entities/todo.entity';

export type IListTodoUseCaseInput = Partial<Pick<TodoEntity, 'title'>> & {
  completed?: 'true' | 'false';
};

export type IListTodoUseCaseOutput = Promise<TodoEntity[]>;
