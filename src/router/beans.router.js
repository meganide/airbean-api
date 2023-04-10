import express from "express";
import { httpCreateOrder, httpGetEtaByOrderNr, httpGetMenu } from "../controllers/beans.controller.js";
import { validateOrder, validateOrderNumber } from "../middleware/beans.middleware.js";
import validateToken from "../middleware/token.middleware.js";

const beansRouter = express.Router();

beansRouter.get("/", httpGetMenu);
beansRouter.get("/order/status/:orderNr", validateToken, validateOrderNumber, httpGetEtaByOrderNr);
beansRouter.post("/order", validateToken, validateOrder, httpCreateOrder);

export default beansRouter;
