import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import { userModel } from '../models/user.model';

class UserController {
  private static instance: UserController | null;

  public static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  async getUser(req: Request, res: Response) {
    const { userId } = req.body;

    if (!userId) {
      return res.json({ error: 'Empty user id' });
    }

    try {
      const user = await userModel.findById({ userId });
      if (!user) {
        return res.json({ user });
      } else {
        return res.json({ error: 'User not found' });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export const userController = UserController.getInstance();
