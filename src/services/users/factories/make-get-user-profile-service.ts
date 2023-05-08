import { UsersRepository } from '@/repositories/prisma/users-repository'
import { GetUserProfileService } from '../get-user-profile'

export function makeGetUserProfileService() {
  const usersRepository = new UsersRepository()
  const service = new GetUserProfileService(usersRepository)

  return service
}
