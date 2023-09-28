import { UsersRepository } from '@/repositories/prisma/users-repository'
import { CreateUserService } from '../create'

export function makeCreateUserService() {
  const usersRepository = new UsersRepository()
  const service = new CreateUserService(usersRepository)

  return service
}
