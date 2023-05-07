import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { GetPlantationByIdService } from '../get-plantation-by-id'

export function makeGetPlantationByIdService() {
  const plantationRepository = new PlantationsRepository()
  const service = new GetPlantationByIdService(plantationRepository)

  return service
}
