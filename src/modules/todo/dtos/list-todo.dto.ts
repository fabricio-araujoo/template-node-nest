import { IsString, IsOptional } from 'class-validator';

export class ListTodoDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  completed?: 'true' | 'false';
}
