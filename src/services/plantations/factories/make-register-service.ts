import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { RegisterService } from '../register'
import { UsersRepository } from '@/repositories/prisma/users-repository'
import { PlantsRepository } from '@/repositories/prisma/plants-repository'

export function makeRegisterService() {
  const plantationsRepository = new PlantationsRepository()
  const usersRepository = new UsersRepository()
  const plantsRepository = new PlantsRepository()
  const service = new RegisterService(
    plantationsRepository,
    usersRepository,
    plantsRepository,
  )

  return service
}
