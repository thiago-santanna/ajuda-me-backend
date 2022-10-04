import { IEncrypterProvider } from "../../../providers/encrypt/IEncrypterProvider";
import {
  IUserRepository,
  IUserRequest,
  IUserResponse,
} from "../repository/IUserRepository";

export class CreateUserService {
  constructor(
    private userRepository: IUserRepository,
    private encrypterProvider: IEncrypterProvider
  ) {}

  async execute(user: IUserRequest): Promise<IUserResponse> {
    user.password = await this.encrypterProvider.hash(user.password);
    const userResponse = await this.userRepository.create(user);
    return userResponse;
  }
}
