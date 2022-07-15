import { prop, getModelForClass } from '@typegoose/typegoose';
import { ProjectModel } from './project.model';
import { UserModel } from './user.model';

export class TodoModel {
  @prop({ required: true })
  public uniqueId: string;

  @prop({ required: true })
  public createdBy: UserModel;

  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public content: string;

  @prop({ required: true })
  public date: Date;

  @prop({ required: true })
  public isCompleted: boolean;

  @prop()
  public sharingUsers?: UserModel[];

  @prop()
  public labels?: string[];

  @prop()
  public reminder?: Date;

  @prop()
  public projects?: ProjectModel[];
}

export const todoModel = getModelForClass(TodoModel);
