import { IsString, IsNotEmpty } from 'class-validator';

export class GetTodoDto {
  @IsString()
  @IsNotEmpty()
  _id: string;
}
