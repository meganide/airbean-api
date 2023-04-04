import jwt from 'jsonwebtoken';
import { findUserByUsername, createUser } from "../models/user/user.model.js";

export const httpSignup = async (req, res) => {
  const { username, password } = req.body;
  try {
    if(await findUserByUsername(username)) return res.status(200).json({ success: false, message: 'Username already exists' });
    const createdUser = await createUser(username, password);
    const userId = createdUser._id;
    const token = jwt.sign({ userId }, 'super-pants-secret-key', { expiresIn: '15m' });
    return res.status(201).json({ success: true, username, token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export const httpLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);
    if(!user) return res.status(200).json({ success: false, message: 'Wrong username or password' });
    if(user.password !== password) return res.status(200).json({ success: false, message: 'Wrong username or password' });
    const userName = user.username;
    const userId = user._id;
    const token = jwt.sign({ userId }, 'super-pants-secret-key', { expiresIn: '15m' });
    return res.status(200).json({ success: true, userName, token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};