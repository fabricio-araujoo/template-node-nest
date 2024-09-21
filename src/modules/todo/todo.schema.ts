import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TodoEntity } from 'src/domain/entities/todo/todo.entity';

export type TodoDocument = Todo & Document;

@Schema({
  collection: 'tarefas',
  versionKey: false,
})
export class Todo extends TodoEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ default: false })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
