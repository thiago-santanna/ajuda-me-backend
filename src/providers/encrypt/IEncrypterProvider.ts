export interface ICompare {
  passwordHash: string;
  plaintextPassword: string;
}

export interface IEncrypterProvider {
  hash(plaintextPassword: string): Promise<string>;
  compare({ passwordHash, plaintextPassword }: ICompare): Promise<boolean>;
}
