import { IPlantationsRepository } from "@/repositories/interfaces/interface-plantations-repository";
import { Plantation } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found";

interface IGetPlantationByIdServiceRequest {
  plantationId: string
}

interface IGetPlantationByIdServiceResponse {
  plantation: Plantation
}

export class GetPlantationByIdService {
  constructor(private plantationRepository: IPlantationsRepository) {}

  async execute({
    plantationId
  }: IGetPlantationByIdServiceRequest): Promise<IGetPlantationByIdServiceResponse> {
    const plantation = await this.plantationRepository.findById(plantationId)

    if(!plantation) {
      throw new ResourceNotFoundError()
    }

    return { plantation }
  }
}