import { IPlantationsRepository } from "@/repositories/interfaces/interface-plantations-repository";
import { ResourceNotFoundError } from "../errors/resource-not-found";
import { Plantation } from "@prisma/client";

interface IRemovePlantationServiceRequest {
  plantationId: string
}

interface IRemovePlantationServiceResponse {
  plantation: Plantation
}

export class RemovePlantationService {
  constructor(private plantationRepository: IPlantationsRepository) {}

  async execute({
    plantationId
  }: IRemovePlantationServiceRequest): Promise<IRemovePlantationServiceResponse> {
    const plantation = await this.plantationRepository.removePlantation(plantationId)

    if(!plantation) {
      throw new ResourceNotFoundError()
    }

    return { plantation }
  }
}