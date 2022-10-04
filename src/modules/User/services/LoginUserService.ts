import { IEncrypterProvider } from "../../../providers/encrypt/IEncrypterProvider";
import {
  ILoginAuthentication,
  IUserRepository,
} from "../repository/IUserRepository";

export class LoginUserService {
  constructor(
    private userRepository: IUserRepository,
    private encrypterProvider: IEncrypterProvider
  ) {}

  async execute({ email, password }: ILoginAuthentication): Promise<boolean> {
    const userFinding = await this.userRepository.findByEmail(email);
    const isMacth = await this.encrypterProvider.compare({
      passwordHash: userFinding.password,
      plaintextPassword: password,
    });
    return isMacth;
  }
}
