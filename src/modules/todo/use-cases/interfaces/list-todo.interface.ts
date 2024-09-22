import { TodoEntity } from '../../entities/todo.entity';

export type IListTodoUseCaseOutput = Promise<TodoEntity[]>;
