import { IPlantationsRepository } from '@/repositories/interfaces/interface-plantations-repository'
import { Plantation } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found'

interface IFindByUserPlantationsServiceRequest {
  userId: string
}

interface IFindByUserPlantationsServiceResponse {
  plantations: Plantation[]
}

export class FindByUserPlantationsService {
  constructor(private plantationRepository: IPlantationsRepository) {}

  async execute({
    userId,
  }: IFindByUserPlantationsServiceRequest): Promise<IFindByUserPlantationsServiceResponse> {
    const plantations = await this.plantationRepository.findByUser(userId)

    if (!plantations) {
      throw new ResourceNotFoundError()
    }

    return { plantations }
  }
}
