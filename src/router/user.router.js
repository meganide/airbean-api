import express from "express";
import { httpLogin, httpSignup } from "../controllers/user.controller.js";
import checkValidToken from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/signup", httpSignup);
userRouter.post("/login", httpLogin);
userRouter.get("/history", checkValidToken, (req, res) =>
  res.status(200).json({ success: true, id: res.locals.userId })
);
userRouter.get("/status", checkValidToken, () => {});

export default userRouter;
