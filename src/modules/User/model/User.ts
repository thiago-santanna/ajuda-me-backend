import { v4 as uuidV4 } from "uuid";

export interface IUser {
  nome: string;
  email: string;
  whatsApp: string;
  cidade: string;
  estado: string;
  password: string;
}

export class User {
  id?: string;

  constructor(
    private nome: string,
    private email: string,
    private whatsApp: string,
    private cidade: string,
    private estado: string,
    private password: string,
    private status: number
  ) {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
  getId(): string {
    if (this.id) {
      return this.id;
    }
    return "";
  }
  getStatus(): number {
    return this.status;
  }
  getNome(): string {
    return this.nome;
  }
  getEmail(): string {
    return this.email;
  }
  getWhatsApp(): string {
    return this.whatsApp;
  }
  getCidade(): string {
    return this.cidade;
  }
  getEstado(): string {
    return this.estado;
  }
  getPasswrod(): string {
    return this.password;
  }
  getPassword(): string {
    return this.password;
  }
}
