import { Prisma, User } from '@prisma/client'

export interface IUsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findAll(): Promise<User[] | []>
  updateUser(id: string, data:Prisma.UserUpdateInput): Promise<User>
  removeUser(id: string): Promise<User>

  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
}
