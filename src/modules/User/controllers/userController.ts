import { Router, Request, Response } from "express";
import UserMemoryRepositpory from "../repository/Impl/UserMemoryRepositpory";
import { IUserRequest } from "../repository/IUserRepository";
import { CreateUserService } from "../services/CreateUserService";

const userController = Router();
const userRepository = new UserMemoryRepositpory();

userController.post("/", async (req: Request, res: Response) => {
  const { nome, email, whatsApp, cidade, estado, password }: IUserRequest =
    req.body;

  const createUserService = new CreateUserService(userRepository);
  const userResponse = await createUserService.execute({
    nome,
    email,
    whatsApp,
    cidade,
    estado,
    password,
  });

  console.log(userResponse);

  return res.status(201).json(userResponse);
});

export default userController;
