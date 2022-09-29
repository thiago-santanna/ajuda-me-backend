import {
  IUserRepository,
  IUserRequest,
  IUserResponse,
} from "../repository/IUserRepository";

export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: IUserRequest): Promise<IUserResponse> {
    const userResponse = await this.userRepository.create(user);

    return userResponse;
  }
}
