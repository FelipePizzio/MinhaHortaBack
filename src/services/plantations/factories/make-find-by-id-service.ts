import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { FindByIdPlantationService } from '../find-by-id'

export function makeFindByIdPlantationService() {
  const plantationRepository = new PlantationsRepository()
  const service = new FindByIdPlantationService(plantationRepository)

  return service
}
