import { hashSync, compareSync } from "bcrypt";
import { IEncrypterProvider, ICompare } from "../IEncrypterProvider";

export class BcryptProvider implements IEncrypterProvider {
  private saltRounds = 10;

  async hash(plaintextPassword: string): Promise<string> {
    const hash = hashSync(plaintextPassword, this.saltRounds);
    console.log(hash);
    return hash;
  }

  async compare({
    passwordHash,
    plaintextPassword,
  }: ICompare): Promise<boolean> {
    const match = compareSync(plaintextPassword, passwordHash);
    return match;
  }
}
