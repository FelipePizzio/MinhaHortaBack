import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { GetAllPlantationsService } from '../get-all-plantations'

export function makeGetAllPlantationsService() {
  const plantationRepository = new PlantationsRepository()
  const service = new GetAllPlantationsService(plantationRepository)

  return service
}
