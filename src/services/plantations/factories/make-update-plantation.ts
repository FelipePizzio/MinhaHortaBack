import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { UpdatePlantationService } from '../update-plantation'

export function makeUpdatePlantationService() {
  const plantationRepository = new PlantationsRepository()
  const service = new UpdatePlantationService(plantationRepository)

  return service
}
