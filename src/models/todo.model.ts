import { prop, getModelForClass } from '@typegoose/typegoose';

import { projectId } from '../types/project.types';
import { userId } from '../types/user.types';

export class TodoModel {
  @prop({ required: true })
  public todoId: string;

  @prop({ required: true })
  public createdBy: userId;

  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public content: string;

  @prop({ required: true })
  public date: Date;

  @prop({ required: true })
  public isCompleted: boolean;

  @prop()
  public sharingUsers?: userId[];

  @prop()
  public labels?: string[];

  @prop()
  public reminder?: Date;

  @prop()
  public projects?: projectId[];
}

export const todoModel = getModelForClass(TodoModel);
