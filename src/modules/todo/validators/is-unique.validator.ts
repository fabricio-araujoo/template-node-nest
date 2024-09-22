import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TodoService } from '../services/todo.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueValidator implements ValidatorConstraintInterface {
  constructor(private todoService: TodoService) {}

  async validate(
    value: any
    // validationArguments?: ValidationArguments
  ): Promise<boolean> {
    const title = value || '';

    const todos = await this.todoService.findTodoByTitle(title);

    const isTodosEmpty = todos.length === 0;

    return isTodosEmpty;
  }
}

export const IsUnique = (validationOptions: ValidationOptions) => {
  return (obj: object, prop: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: prop,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueValidator,
    });
  };
};
