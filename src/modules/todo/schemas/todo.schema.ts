import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ECollections } from 'src/enums/collections.enum';
import { TodoEntity } from '../entities/todo.entity';

export type TodoDocument = Todo & Document;

@Schema({
  collection: ECollections.tarefas,
  versionKey: false,
})
export class Todo extends TodoEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ default: false })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
