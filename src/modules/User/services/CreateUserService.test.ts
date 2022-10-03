import { describe, expect, it } from "vitest";
import { User } from "../model/User";

describe("ao manipular o cadastro de usuario", () => {
  it("o usuario deve ter todos os campos informados no cadastro", () => {
    const usuario: User = new User(
      "John",
      "john@gmail.com",
      "81999999999",
      "recife",
      "PE",
      "1020"
    );

    const existemTodosCampos = () => {
      if (usuario.getNome() === undefined) return false;
      if (usuario.getWhatsApp() === undefined) return false;
      if (usuario.getEstado() === undefined) return false;
      if (usuario.getCidade() === undefined) return false;
      if (usuario.getEmail() === undefined) return false;
      return true;
    };

    expect(existemTodosCampos()).toBe(true);
  });
});
