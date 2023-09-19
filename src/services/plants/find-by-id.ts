import { IPlantsRepository } from "@/repositories/interfaces/interface-plants-repository"
import { Plant } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found"

interface IFindByIdPlantServiceRequest {
  plantId: string
}

interface IFindByIdPlantServiceResponse {
  plant: Plant
}

export class FindByIdPlantService {
  constructor(private plantRepository: IPlantsRepository) {}

  async execute({
    plantId
  }: IFindByIdPlantServiceRequest): Promise<IFindByIdPlantServiceResponse> {
    const plant = await this.plantRepository.findById(plantId)

    if(!plant) {
      throw new ResourceNotFoundError()
    }

    return { plant }
  }
}