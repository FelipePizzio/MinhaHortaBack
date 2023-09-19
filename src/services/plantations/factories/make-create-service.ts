import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { CreatePlantationService } from '../create'
import { UsersRepository } from '@/repositories/prisma/users-repository'
import { PlantsRepository } from '@/repositories/prisma/plants-repository'

export function makeCreatePlantationService() {
  const plantationsRepository = new PlantationsRepository()
  const usersRepository = new UsersRepository()
  const plantsRepository = new PlantsRepository()
  const service = new CreatePlantationService(
    plantationsRepository,
    usersRepository,
    plantsRepository,
  )

  return service
}
