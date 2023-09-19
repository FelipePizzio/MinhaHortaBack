import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found'

interface IFindByIdServiceRequest {
  userId: string
}

interface IFindByIdServiceResponse {
  user: User
}

export class FindByIdService {
  constructor(private userRepository: IUsersRepository) {}

  async execute({
    userId,
  }: IFindByIdServiceRequest): Promise<IFindByIdServiceResponse> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return { user }
  }
}
