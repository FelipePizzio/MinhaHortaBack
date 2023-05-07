import { PlantsRepository } from '@/repositories/prisma/plants-repository'
import { GetAllPlantsService } from '../get-all-plants'

export function makeGetAllPlantsService() {
  const plantsRepository = new PlantsRepository()
  const service = new GetAllPlantsService(plantsRepository)

  return service
}
