import { IPlantsRepository } from '@/repositories/interfaces/interface-plants-repository'
import { Plant } from '@prisma/client'

interface ICreateServiceRequest {
  name: string
}

interface ICreateServiceResponse {
  plant: Plant
}

export class CreatePlantService {
  constructor(private plantsRepository: IPlantsRepository) {}

  async execute({
    name,
  }: ICreateServiceRequest): Promise<ICreateServiceResponse> {
    const plant = await this.plantsRepository.create({
      name,
    })

    return { plant }
  }
}
