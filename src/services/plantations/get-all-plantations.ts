import { IPlantationsRepository } from '@/repositories/interfaces/interface-plantations-repository'
import { Plantation } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found'

interface IGetAllPlantationsServiceRequest {
  userId: string
}

interface IGetAllPlantationsServiceResponse {
  plantations: Plantation[]
}

export class GetAllPlantationsService {
  constructor(private plantationRepository: IPlantationsRepository) {}

  async execute({
    userId,
  }: IGetAllPlantationsServiceRequest): Promise<IGetAllPlantationsServiceResponse> {
    const plantations = await this.plantationRepository.findAllByUser(userId)

    if (!plantations) {
      throw new ResourceNotFoundError()
    }

    return { plantations }
  }
}
