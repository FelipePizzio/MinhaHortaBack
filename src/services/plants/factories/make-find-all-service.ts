import { PlantsRepository } from '@/repositories/prisma/plants-repository'
import { FindAllPlantsService } from '../find-all'

export function makeFindAllPlantsService() {
  const plantsRepository = new PlantsRepository()
  const service = new FindAllPlantsService(plantsRepository)

  return service
}
