import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  if (User && await bcrypt.compare(password, User.passwordHash)) {
    const token = jwt.sign({ userId: User.id }, 'your_secret_key', { expiresIn: '1h' }); 
    return res.status(200).json({ token });
  }
};
// POST /login - Login a user
Router.post('/login', login);

export default Router;
