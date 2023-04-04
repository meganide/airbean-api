import express from 'express';
import { httpSignup } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/signup', httpSignup);
userRouter.post('/login', () => {});
userRouter.get('/history', () => {});
userRouter.get('/status', () => {});

export default userRouter;
