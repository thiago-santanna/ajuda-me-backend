/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Router, Request, Response } from "express";
import UserMemoryRepositpory from "../repository/Impl/UserMemoryRepositpory";
import {
  ILoginAuthentication,
  IUserRequest,
} from "../repository/IUserRepository";
import { CreateUserService } from "../services/CreateUserService";
import { BcryptProvider } from "../../../providers/encrypt/Impl/bCryptProvider";
import { LoginUserService } from "../services/LoginUserService";

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
  // @ts-ignore: Unreachable code error
  delete userResponse.password;
  return res.status(201).json(userResponse);
});

userController.post("/login", async (req: Request, res: Response) => {
  const { email, password }: ILoginAuthentication = req.body;

  const loginUserService = new LoginUserService(userRepository, encrypter);
  const isMacth = await loginUserService.execute({ email, password });

  if (!isMacth) {
    return res
      .status(403)
      .send({ message: "Invalid credentials or password." });
  }

  return res.status(200).send();
});

export default userController;
