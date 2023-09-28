import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { FindByUserPlantationsService } from '../find-by-user'

export function makeFindByUserPlantationsService() {
  const plantationsRepository = new PlantationsRepository()
  const service = new FindByUserPlantationsService(plantationsRepository)

  return service
}
