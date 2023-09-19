import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from '../errors/user-already-exists-error'
import { User } from '@prisma/client'
import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository'

interface ICreateServiceRequest {
  name: string
  email: string
  password: string
}

interface ICreateServiceResponse {
  user: User
}

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    name,
    email,
    password,
  }: ICreateServiceRequest): Promise<ICreateServiceResponse> {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    return { user }
  }
}
