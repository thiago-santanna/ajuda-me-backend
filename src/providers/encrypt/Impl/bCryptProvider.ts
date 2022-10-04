import bcrypt from "bcrypt";
import { IEncrypterProvider } from "../IEncrypterProvider";

export class BcryptProvider implements IEncrypterProvider {
  private saltRounds = 10;

  async hash(plaintextPassword: string): Promise<string> {
    const hash = bcrypt.hashSync(plaintextPassword, this.saltRounds);
    console.log(hash);
    return hash;
  }
}
