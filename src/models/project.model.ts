import { prop, getModelForClass } from '@typegoose/typegoose';

import { todoId } from '../types/todo.types';
import { userId } from '../types/user.types';
import { ActivityModel } from './activity.model';
import { CommentModel } from './comment.model';

export class ProjectModel {
  @prop({ required: true })
  public projectId: string;

  @prop({ required: true })
  public createdBy: userId;

  @prop()
  public todos?: todoId[];

  @prop()
  public sharingUsers?: userId[];

  @prop()
  public comments?: CommentModel[];

  @prop()
  public activities?: ActivityModel[];
}

export const projectModel = getModelForClass(ProjectModel);
