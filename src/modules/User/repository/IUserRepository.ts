import { IUser } from "../model/User";

interface IUserResponse {
  nome: string;
  email: string;
  whatsApp: string;
  cidade: string;
  estado: string;
}

export interface IUserRepository {
  create(user: IUser): Promise<IUserResponse>;
  findOne(id: string): Promise<IUserResponse>;
  findAll(): Promise<IUserResponse[]>;
  update(user: IUser): Promise<void>;
  delete(id: string): Promise<void>;
}
