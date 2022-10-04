import { describe, it, expect } from "vitest";
import { BcryptProvider } from "../../../providers/encrypt/Impl/bCryptProvider";
import UserMemoryRepositpory from "../repository/Impl/UserMemoryRepositpory";
import { IUserRequest } from "../repository/IUserRepository";
import { LoginUserService } from "../services/LoginUserService";
import { CreateUserService } from "./CreateUserService";

describe("Ao fazer o login do usuario", () => {
  it("quando corresponder as senhas deve ser verdadeiro", async () => {
    const userRepository = new UserMemoryRepositpory();
    const encrypter = new BcryptProvider();
    const createUserService = new CreateUserService(userRepository, encrypter);
    const loginUserService = new LoginUserService(userRepository, encrypter);

    const usuario: IUserRequest = {
      nome: "John",
      email: "john@gmail.com",
      whatsApp: "81999999999",
      cidade: "recife",
      estado: "PE",
      password: "102030",
    };
    const userResturned = await createUserService.execute(usuario);

    const email = userResturned.email;
    const password = "102030";

    const macth = await loginUserService.execute({ email, password });
    expect(macth).toBe(true);
  });

  it("quando as senhas não corresponder deve ser falso", async () => {
    const userRepository = new UserMemoryRepositpory();
    const encrypter = new BcryptProvider();
    const createUserService = new CreateUserService(userRepository, encrypter);
    const loginUserService = new LoginUserService(userRepository, encrypter);

    const usuario: IUserRequest = {
      nome: "John",
      email: "john@gmail.com",
      whatsApp: "81999999999",
      cidade: "recife",
      estado: "PE",
      password: "102030",
    };
    const userResturned = await createUserService.execute(usuario);

    const email = userResturned.email;
    const password = "1020";

    const macth = await loginUserService.execute({ email, password });
    expect(macth).toBe(false);
  });
});
