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
      userRequest.password
    );

    this.users.push(user);

    const userCadastrador = this.users.filter(
      (user) => user.getNome() === userRequest.nome
    );

    const userResult: IUserResponse = {
      id: !userCadastrador[0].id ? "" : userCadastrador[0].id,
      nome: userCadastrador[0].getNome(),
    };
    return userResult;
  }
  async findOne(id: string): Promise<IUserResponse> {
    throw new Error("Method not implemented.");
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
