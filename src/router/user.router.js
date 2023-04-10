import express from "express";
import { httpLogin, httpSignup, httpUserTokenStatus, httpGetOrderHistory } from "../controllers/user.controller.js";
// eslint-disable-next-line import/no-named-as-default
import validateToken from "../middleware/token.middleware.js";
import validateUserForm from "../middleware/user.middleware.js";

const userRouter = express.Router();

userRouter.post("/signup", validateUserForm, httpSignup);
userRouter.post("/login", validateUserForm, httpLogin);
userRouter.get("/history", validateToken, httpGetOrderHistory);
userRouter.get("/status", httpUserTokenStatus);

export default userRouter;
