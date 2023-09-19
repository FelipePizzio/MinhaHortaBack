import { IPlantationsRepository } from '@/repositories/interfaces/interface-plantations-repository'
import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository'
import { Plantation } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found'
import { IPlantsRepository } from '@/repositories/interfaces/interface-plants-repository'

interface ICreatePlantationServiceRequest {
  name: string
  plantId: string
  userId: string
}

interface ICreatePlantationServiceResponse {
  plantation: Plantation
}

export class CreatePlantationService {
  constructor(
    private plantationRepository: IPlantationsRepository,
    private usersRepository: IUsersRepository,
    private plantsRepository: IPlantsRepository,
  ) {}

  async execute({
    name,
    plantId,
    userId,
  }: ICreatePlantationServiceRequest): Promise<ICreatePlantationServiceResponse> {
    const user = await this.usersRepository.findById(userId)
    const plant = await this.plantsRepository.findById(plantId)

    if (!user || !plant) {
      throw new ResourceNotFoundError()
    }

    const plantation = await this.plantationRepository.create({
      name,
      plantId,
      userId,
    })

    return { plantation }
  }
}
