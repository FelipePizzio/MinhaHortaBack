import { ResourceNotFoundError } from "../errors/resource-not-found";
import { User } from "@prisma/client";
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository";
import { hash } from "bcryptjs";

interface IUpdateUserServiceRequest {
  userId: string
  name: string
  password: string
  avatar: string
}

interface IUpdateUserServiceResponse {
  user: User
}

export class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    userId,
    name,
    password,
    avatar,
  }: IUpdateUserServiceRequest): Promise<IUpdateUserServiceResponse> {
    const password_hash = await hash(password, 6)

    const user = await this.usersRepository.updateUser(userId, {name, avatar, password_hash})

    if(!user) {
      throw new ResourceNotFoundError()
    }

    return { user }
  }
}