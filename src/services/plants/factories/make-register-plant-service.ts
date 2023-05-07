import { PlantsRepository } from '@/repositories/prisma/plants-repository'
import { RegisterPlantService } from '../register-plant'

export function makeRegisterPlantService() {
  const plantsRepository = new PlantsRepository()
  const service = new RegisterPlantService(plantsRepository)

  return service
}
