import { IPlantationsRepository } from "@/repositories/interfaces/interface-plantations-repository";
import { ResourceNotFoundError } from "../errors/resource-not-found";
import { Plantation, User } from "@prisma/client";
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository";
import { hash } from "bcryptjs";

interface IUpdateUserProfileServiceRequest {
  userId: string
  name: string
  password: string
  avatar: string
}

interface IUpdateUserProfileServiceResponse {
  user: User
}

export class UpdateUserProfileService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    userId,
    name,
    password,
    avatar,
  }: IUpdateUserProfileServiceRequest): Promise<IUpdateUserProfileServiceResponse> {
    const password_hash = await hash(password, 6)

    const user = await this.usersRepository.updateUser(userId, {name, avatar, password_hash})

    if(!user) {
      throw new ResourceNotFoundError()
    }

    return { user }
  }
}