import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { RemovePlantationService } from '../remove-plantation'

export function makeRemovePlantationService() {
  const plantationRepository = new PlantationsRepository()
  const service = new RemovePlantationService(plantationRepository)

  return service
}
