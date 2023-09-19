import { PlantsRepository } from '@/repositories/prisma/plants-repository'
import { CreatePlantService } from '../create'

export function makeCreatePlantService() {
  const plantsRepository = new PlantsRepository()
  const service = new CreatePlantService(plantsRepository)

  return service
}
