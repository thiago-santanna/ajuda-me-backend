export interface ILoginAuthentication {
  email: string;
  password: string;
}

export interface IUserRequest {
  nome: string;
  email: string;
  whatsApp: string;
  cidade: string;
  estado: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  nome: string;
  email: string;
  whatsApp: string;
  cidade: string;
  estado: string;
  password: string;
}

export interface IUserRepository {
  create(user: IUserRequest): Promise<IUserResponse>;
  findByEmail(email: string): Promise<IUserResponse>;
  findByid(id: string): Promise<IUserResponse>;
  findAll(): Promise<IUserResponse[]>;
  update(user: IUserRequest): Promise<void>;
  delete(id: string): Promise<void>;
}
