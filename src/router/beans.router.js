import express from 'express';
import { httpCreateOrder, httpGetMenu } from '../controllers/beans.controller.js';

const beansRouter = express.Router();

beansRouter.get('/', httpGetMenu);
beansRouter.post('/order', httpCreateOrder);

export default beansRouter;
