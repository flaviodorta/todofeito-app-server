import { prop, getModelForClass } from '@typegoose/typegoose';
import { UserModel } from './user.model';

export class CommentModel {
  @prop({ required: true })
  public uniqueId: string;

  @prop({ required: true })
  public createdBy: UserModel;

  @prop({ required: true })
  public content: string;

  @prop({ required: true })
  public date: Date;
}

export const commentModel = getModelForClass(CommentModel);
