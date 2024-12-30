import { Router } from "express";
import { CreateUser, GetUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", GetUsers);
userRouter.post("/", CreateUser);

export default userRouter;