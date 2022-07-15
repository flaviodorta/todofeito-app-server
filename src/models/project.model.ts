import { prop, getModelForClass } from '@typegoose/typegoose';
import { CommentModel } from './comment.model';
import { TodoModel } from './todo.model';
import { UserModel } from './user.model';

export class ProjectModel {
  @prop({ required: true })
  public uniqueId: string;

  @prop({ required: true })
  public createdBy: UserModel;

  @prop()
  public todos: TodoModel[];

  @prop()
  public sharingUsers: UserModel[];

  @prop()
  public comments: CommentModel[];
}

export const projectModel = getModelForClass(ProjectModel);
