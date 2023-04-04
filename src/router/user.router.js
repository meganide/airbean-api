import express from 'express';
import { httpLogin, httpSignup } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/signup', httpSignup);
userRouter.post('/login', httpLogin);
userRouter.get('/history', () => {});
userRouter.get('/status', () => {});

export default userRouter;
