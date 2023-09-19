import { IPlantationsRepository } from "@/repositories/interfaces/interface-plantations-repository";
import { ResourceNotFoundError } from "../errors/resource-not-found";
import { Plantation } from "@prisma/client";

interface IUpdatePlantationServiceRequest {
  plantationId: string
  name: string
  image: string
  plantId: string
}

interface IUpdatePlantationServiceResponse {
  plantation: Plantation
}

export class UpdatePlantationService {
  constructor(private plantationRepository: IPlantationsRepository) {}

  async execute({
    plantationId,
    name,
    image,
    plantId,
  }: IUpdatePlantationServiceRequest): Promise<IUpdatePlantationServiceResponse> {
    const plantation = await this.plantationRepository.updatePlantation(plantationId, {name, image, plantId})

    if(!plantation) {
      throw new ResourceNotFoundError()
    }

    return { plantation }
  }
}