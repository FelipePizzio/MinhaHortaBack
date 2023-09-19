import { IPlantationsRepository } from "@/repositories/interfaces/interface-plantations-repository";
import { Plantation } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found";

interface IFindByIdPlantationServiceRequest {
  plantationId: string
}

interface IFindByIdPlantationServiceResponse {
  plantation: Plantation
}

export class FindByIdPlantationService {
  constructor(private plantationRepository: IPlantationsRepository) {}

  async execute({
    plantationId
  }: IFindByIdPlantationServiceRequest): Promise<IFindByIdPlantationServiceResponse> {
    const plantation = await this.plantationRepository.findById(plantationId)

    if(!plantation) {
      throw new ResourceNotFoundError()
    }

    return { plantation }
  }
}