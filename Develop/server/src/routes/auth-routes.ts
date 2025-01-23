import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// TODO: If the user exists and the password is correct, return a JWT token

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;   

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // If user doesn't exist, return an error
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token with the user's ID as the payload
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });

    // Return the token as a response
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// POST /login - Login route
Router.post('/login', login);

export default Router;
