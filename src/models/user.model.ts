import { prop, getModelForClass } from '@typegoose/typegoose';

export class UserModel {
  @prop({ required: true })
  public userId: string;

  @prop({ required: true })
  public email: string;

  @prop({ required: true })
  public password: string;

  @prop()
  public name?: string;

  @prop()
  public lastName?: string;
}

export const userModel = getModelForClass(UserModel);
