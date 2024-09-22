import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteTodoDto {
  @IsString()
  @IsNotEmpty()
  _id: string;
}
