import express from 'express';
import beansRouter from './beans.router.js';

const api = express.Router();

api.use('/beans', beansRouter);

export default api;
