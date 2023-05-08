import { IPlantsRepository } from "@/repositories/interfaces/interface-plants-repository"
import { Plant } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found"

interface IGetPlantByIdServiceRequest {
  plantId: string
}

interface IGetPlantByIdServiceResponse {
  plant: Plant
}

export class GetPlantByIdService {
  constructor(private plantRepository: IPlantsRepository) {}

  async execute({
    plantId
  }: IGetPlantByIdServiceRequest): Promise<IGetPlantByIdServiceResponse> {
    const plant = await this.plantRepository.findById(plantId)

    if(!plant) {
      throw new ResourceNotFoundError()
    }

    return { plant }
  }
}