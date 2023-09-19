import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { FindByUserPlantationsService } from '../find-by-user'

export function makeFindByUserPlantationsService() {
  const plantationRepository = new PlantationsRepository()
  const service = new FindByUserPlantationsService(plantationRepository)

  return service
}
