import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateService } from '../authenticate'

export function makeAuthenticateService() {
  const usersRepository = new PrismaUsersRepository()
  const service = new AuthenticateService(usersRepository)

  return service
}
