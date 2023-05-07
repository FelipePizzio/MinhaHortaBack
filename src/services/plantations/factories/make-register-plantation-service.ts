import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { RegisterPlantationService } from '../register-plantation'
import { UsersRepository } from '@/repositories/prisma/users-repository'
import { PlantsRepository } from '@/repositories/prisma/plants-repository'

export function makeRegisterPlantationService() {
  const plantationsRepository = new PlantationsRepository()
  const usersRepository = new UsersRepository()
  const plantsRepository = new PlantsRepository()
  const service = new RegisterPlantationService(
    plantationsRepository,
    usersRepository,
    plantsRepository,
  )

  return service
}
