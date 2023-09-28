import { UsersRepository } from '@/repositories/prisma/users-repository'
import { FindByIdService } from '../find-by-id'

export function makeFindByIdService() {
  const usersRepository = new UsersRepository()
  const service = new FindByIdService(usersRepository)

  return service
}
