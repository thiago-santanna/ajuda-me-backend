import { Router, Request, Response } from "express";
import { HelloMemoryRepository } from "../repository/Impl/HelloMemoryRepository";
import { HelloServices } from "../services/hello.services";

const helloController = Router();
const helloRepository = new HelloMemoryRepository();

helloController.get("/", (req: Request, res: Response) => {
  const helloServices = new HelloServices(helloRepository);
  const hello = helloServices.execute();
  return res.status(200).json({ message: hello });
});

export default helloController;
