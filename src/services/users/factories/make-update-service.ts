import { UsersRepository } from "@/repositories/prisma/users-repository";
import { UpdateUserService } from "../update";

export function makeUpdateUserService() {
  const usersRepository = new UsersRepository()
  const service = new UpdateUserService(usersRepository)

  return service
}