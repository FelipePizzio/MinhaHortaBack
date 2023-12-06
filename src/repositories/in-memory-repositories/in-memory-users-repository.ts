import { User, Prisma } from '@prisma/client'
import { IUsersRepository } from '../interfaces/interface-users-repository'

export class InMemoryUsersRepository implements IUsersRepository {
  public items: User[] = []
  
  findAll(): Promise<User[] | []> {
    throw new Error('Method not implemented.')
  }

  updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    throw new Error('Method not implemented.')
  }

  removeUser(id: string): Promise<User> {
    throw new Error('Method not implemented.')
  }

  async findById(id: string) {
    const user = this.items.find((item) => item.id === id)

    if (!user) return null

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) return null

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
      avatar: '',
    }

    this.items.push(user)

    return user
  }
}
