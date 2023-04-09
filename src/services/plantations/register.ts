import { IPlantationsRepository } from '@/repositories/interfaces/interface-plantations-repository'
import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository'
import { Plantation } from '@prisma/client'

interface IRegisterServiceRequest {
  name: string
  plantId: string
  userId: string
}

interface IRegisterServiceResponse {
  plantation: Plantation
}

export class RegisterService {
  constructor(
    private plantationRepository: IPlantationsRepository,
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    plantId,
    userId,
  }: IRegisterServiceRequest): Promise<IRegisterServiceResponse> {
    const user = await this.usersRepository.findById(userId)

    const plantation = await this.plantationRepository.create({
      name,
      plantId,
      userId,
    })

    user?.plantations.push(plantation.id)

    return { plantation }
  }
}
