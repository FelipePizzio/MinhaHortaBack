import { Prisma, User } from '@prisma/client'

export interface IUsersRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  updateUser(id: string, data:Prisma.UserUpdateInput): Promise<User>
  create(data: Prisma.UserCreateInput): Promise<User>
}
