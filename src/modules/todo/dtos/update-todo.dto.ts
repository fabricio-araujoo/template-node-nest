import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  _id: string;

  @IsString({ message: 'O título da tarefa deve ser um texto' })
  @IsOptional()
  title?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
