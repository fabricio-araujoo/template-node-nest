import { Types } from 'mongoose';

export class TodoEntity {
  constructor(
    public _id: Types.ObjectId = new Types.ObjectId(),
    public title: string,
    public completed: boolean = false
  ) {}
}
