import { IPlantsRepository } from '@/repositories/interfaces/interface-plants-repository'
import { Plant } from '@prisma/client'

interface IRegisterServiceRequest {
  name: string
}

interface IRegisterServiceResponse {
  plant: Plant
}

export class RegisterPlantService {
  constructor(private plantsRepository: IPlantsRepository) {}

  async execute({
    name,
  }: IRegisterServiceRequest): Promise<IRegisterServiceResponse> {
    const plant = await this.plantsRepository.create({
      name,
    })

    return { plant }
  }
}
