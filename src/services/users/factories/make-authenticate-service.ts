import { UsersRepository } from '@/repositories/prisma/users-repository'
import { AuthenticateService } from '../authenticate'

export function makeAuthenticateService() {
  const usersRepository = new UsersRepository()
  const service = new AuthenticateService(usersRepository)

  return service
}
