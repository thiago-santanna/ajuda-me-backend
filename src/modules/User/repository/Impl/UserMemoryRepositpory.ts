import { User } from "../../model/User";
import {
  IUserRepository,
  IUserRequest,
  IUserResponse,
} from "../IUserRepository";

export default class UserMemoryRepositpory implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = new Array<User>();
  }

  async create(userRequest: IUserRequest): Promise<IUserResponse> {
    const user = new User(
      userRequest.nome,
      userRequest.email,
      userRequest.whatsApp,
      userRequest.cidade,
      userRequest.estado,
      userRequest.password,
      1
    );

    this.users.push(user);

    const userCadastrador = this.users.filter(
      (user) => user.getNome() === userRequest.nome
    );

    const userResult: IUserResponse = {
      id: userCadastrador[0].id === undefined ? "" : userCadastrador[0].id,
      nome: userCadastrador[0].getNome(),
      email: userCadastrador[0].getEmail(),
      cidade: userCadastrador[0].getCidade(),
      estado: userCadastrador[0].getEstado(),
      whatsApp: userCadastrador[0].getWhatsApp(),
      password: userCadastrador[0].getPassword(),
    };
    return userResult;
  }

  async findByid(id: string): Promise<IUserResponse> {
    throw new Error("Method not implemented.");
  }

  async findByEmail(email: string): Promise<IUserResponse> {
    const user = this.users.filter((user) => user.getEmail() === email);
    const resultuser: IUserResponse = {
      id: user[0].getId(),
      cidade: user[0].getCidade(),
      email: user[0].getEmail(),
      estado: user[0].getEstado(),
      nome: user[0].getNome(),
      password: user[0].getPassword(),
      whatsApp: user[0].getWhatsApp(),
    };
    return resultuser;
  }
  async findAll(): Promise<IUserResponse[]> {
    throw new Error("Method not implemented.");
  }
  async update(user: IUserRequest): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
