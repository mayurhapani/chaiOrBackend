import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const userRouter = Router();

// Define your routes here

userRouter.get("/register", registerUser);

export { userRouter };
