import express from 'express';
import beansRouter from './beans.router.js';
import userRouter from './user.router.js';

const api = express.Router();

api.use('/beans', beansRouter);
api.use('/user', userRouter);

export default api;
