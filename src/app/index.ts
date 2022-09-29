import express from "express";
import cors from "cors";
import routes from "../routers/index";

const Application = express();
Application.use(express.json());
Application.use(cors());
Application.use(routes);

export default Application;
