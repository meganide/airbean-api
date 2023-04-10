import express from "express";
import { httpLogin, httpSignup, httpUserTokenStatus, httpGetOrderHistory } from "../controllers/user.controller.js";
// eslint-disable-next-line import/no-named-as-default
import validateToken from "../middleware/token.middleware.js";

const userRouter = express.Router();

userRouter.post("/signup", httpSignup);
userRouter.post("/login", httpLogin);
userRouter.get("/history", validateToken, httpGetOrderHistory);
userRouter.get("/status", httpUserTokenStatus);

export default userRouter;
