import { PlantsRepository } from '@/repositories/prisma/plants-repository'
import { RegisterService } from '../register'

export function makeRegisterService() {
  const plantsRepository = new PlantsRepository()
  const service = new RegisterService(plantsRepository)

  return service
}
