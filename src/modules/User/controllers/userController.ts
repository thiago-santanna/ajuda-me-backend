/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Router, Request, Response } from "express";
import UserMemoryRepositpory from "../repository/Impl/UserMemoryRepositpory";
import { IUserRequest } from "../repository/IUserRepository";
import { CreateUserService } from "../services/CreateUserService";
import { BcryptProvider } from "../../../providers/encrypt/Impl/bCryptProvider";

const userController = Router();
const userRepository = new UserMemoryRepositpory();
const encrypter = new BcryptProvider();

userController.post("/", async (req: Request, res: Response) => {
  const { nome, email, whatsApp, cidade, estado, password }: IUserRequest =
    req.body;

  const createUserService = new CreateUserService(userRepository, encrypter);
  const userResponse = await createUserService.execute({
    nome,
    email,
    whatsApp,
    cidade,
    estado,
    password,
  });

  console.log(userResponse);

  // @ts-ignore: Unreachable code error
  delete userResponse.password;

  console.log(userResponse);

  return res.status(201).json(userResponse);
});

export default userController;
