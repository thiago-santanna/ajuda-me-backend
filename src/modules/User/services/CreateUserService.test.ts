import { describe, expect, it } from "vitest";
import { BcryptProvider } from "../../../providers/encrypt/Impl/bCryptProvider";
import UserMemoryRepositpory from "../repository/Impl/UserMemoryRepositpory";
import { CreateUserService } from "./CreateUserService";
import { IUserRequest } from "../repository/IUserRepository";

describe("ao manipular o cadastro de usuario", () => {
  it("o usuario deve ter todos os campos informados no cadastro", async () => {
    const usuario: IUserRequest = {
      nome: "John",
      email: "john@gmail.com",
      whatsApp: "81999999999",
      cidade: "recife",
      estado: "PE",
      password: "1020",
    };

    const userRepository = new UserMemoryRepositpory();
    const encrypter = new BcryptProvider();
    const createUserService = new CreateUserService(userRepository, encrypter);

    const userResturned = await createUserService.execute(usuario);

    const existemTodosCampos = () => {
      if (userResturned.nome === undefined) return false;
      if (userResturned.whatsApp === undefined) return false;
      if (userResturned.estado === undefined) return false;
      if (userResturned.cidade === undefined) return false;
      if (userResturned.email === undefined) return false;
      if (userResturned.password === undefined) return false;
      return true;
    };

    expect(existemTodosCampos()).toBe(true);
  });
});
