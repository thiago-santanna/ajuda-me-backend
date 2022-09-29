import { Router } from "express";
import helloController from "../modules/Hello/controllers/hello.controller";
const routes = Router();

routes.use("/hello", helloController);

export default routes;
