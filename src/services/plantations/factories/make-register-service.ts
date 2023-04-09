import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { RegisterService } from '../register'
import { UsersRepository } from '@/repositories/prisma/users-repository'

export function makeRegisterService() {
  const plantationsRepository = new PlantationsRepository()
  const usersRepository = new UsersRepository()
  const service = new RegisterService(plantationsRepository, usersRepository)

  return service
}
