import { IPlantsRepository } from '@/repositories/interfaces/interface-plants-repository'
import { Plant } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found'

interface IGetAllPlantsServiceRequest {}

interface IGetAllPlantsServiceResponse {
  plants: Plant[]
}

export class GetAllPlantsService {
  constructor(private plantsRepository: IPlantsRepository) {}

  async execute({}: IGetAllPlantsServiceRequest): Promise<IGetAllPlantsServiceResponse> {
    const plants = await this.plantsRepository.findAll()

    if (!plants) {
      throw new ResourceNotFoundError()
    }

    return { plants }
  }
}
