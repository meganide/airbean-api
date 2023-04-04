import express from 'express';
import { httpCreateOrder, httpGetMenu } from '../controllers/beans.controller.js';
import { validateOrder } from "../middleware/beans.middleware.js";

const beansRouter = express.Router();

beansRouter.get('/', httpGetMenu);
beansRouter.post('/order', validateOrder, httpCreateOrder);

export default beansRouter;
