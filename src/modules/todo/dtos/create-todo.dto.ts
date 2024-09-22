import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { IsUnique } from '../validators/is-unique.validator';

export class CreateTodoDto {
  @IsString({ message: 'O título da tarefa deve ser um texto' })
  @IsNotEmpty({ message: 'O título da tarefa não pode estar vazio' })
  @IsUnique({ message: 'Já existe uma tarefa com esse título' })
  title: string;

  @IsBoolean()
  @IsOptional()
  completed: boolean;
}
