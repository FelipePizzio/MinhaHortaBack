import { UsersRepository } from "@/repositories/prisma/users-repository";
import { UpdateUserProfileService } from "../update-user-profile";

export function makeUpdateUserProfileService() {
  const usersRepository = new UsersRepository()
  const service = new UpdateUserProfileService(usersRepository)

  return service
}