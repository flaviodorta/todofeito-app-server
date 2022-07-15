import { prop, getModelForClass } from '@typegoose/typegoose';

import { activityId } from '../types/activity.types';
import { commentId } from '../types/comment.types';
import { todoId } from '../types/todo.types';
import { userId } from '../types/user.types';

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
  public comments?: commentId[];

  @prop()
  public activities?: activityId[];
}

export const projectModel = getModelForClass(ProjectModel);
