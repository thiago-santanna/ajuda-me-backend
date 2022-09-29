import { Router } from "express";
import helloController from "../modules/Hello/controllers/hello.controller";
import userController from "../modules/User/controllers/userController";

const routes = Router();

routes.use("/hello", helloController);
routes.use("/user", userController);

export default routes;
