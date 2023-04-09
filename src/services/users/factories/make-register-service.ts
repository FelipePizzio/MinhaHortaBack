import { UsersRepository } from '@/repositories/prisma/users-repository'
import { RegisterService } from '../register'

export function makeRegisterService() {
  const usersRepository = new UsersRepository()
  const service = new RegisterService(usersRepository)

  return service
}
