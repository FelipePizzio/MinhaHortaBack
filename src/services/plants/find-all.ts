import { IPlantsRepository } from '@/repositories/interfaces/interface-plants-repository'
import { Plant } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found'

interface IFindAllPlantsServiceRequest {}

interface IFindAllPlantsServiceResponse {
  plants: Plant[]
}

export class FindAllPlantsService {
  constructor(private plantsRepository: IPlantsRepository) {}

  async execute({}: IFindAllPlantsServiceRequest): Promise<IFindAllPlantsServiceResponse> {
    const plants = await this.plantsRepository.findAll()

    if (!plants) {
      throw new ResourceNotFoundError()
    }

    return { plants }
  }
}
