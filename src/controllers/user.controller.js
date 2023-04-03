import jwt from 'jsonwebtoken';
import { checkIfUserExists, createUser } from "../models/user/user.model.js";

export const httpSignup = async (req, res) => {
  const { username, password } = req.body;
  try {
    if(!checkIfUserExists(username)) return res.status(400).json({ message: 'User already exists' });
    const createdUser = await createUser(username, password);
    const token = jwt.sign({ createdUser }, 'super-pants-secret-key', { expiresIn: '15m' });
    return res.status(201).json({ success: true, username, token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}