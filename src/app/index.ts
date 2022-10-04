import express from "express";
import cors from "cors";
import routes from "../routers/index";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";

const Application = express();
Application.use(express.json());
Application.use(cors());
Application.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
Application.use(routes);

export default Application;
