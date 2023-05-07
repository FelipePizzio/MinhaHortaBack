import { UsersRepository } from '@/repositories/prisma/users-repository'
import { RegisterUserService } from '../register-user'

export function makeRegisterUserService() {
  const usersRepository = new UsersRepository()
  const service = new RegisterUserService(usersRepository)

  return service
}
