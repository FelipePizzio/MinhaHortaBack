import { UsersRepository } from "@/repositories/prisma/users-repository";
import { UpdateUserProfileService } from "../update";

export function makeUpdateUserProfileService() {
  const usersRepository = new UsersRepository()
  const service = new UpdateUserProfileService(usersRepository)

  return service
}