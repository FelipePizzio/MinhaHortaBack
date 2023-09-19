import { prisma } from '@/lib/prisma'
import { Prisma, User } from '@prisma/client'
import { IUsersRepository } from '../interfaces/interface-users-repository'

export class UsersRepository implements IUsersRepository {

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async findAll() {
    const users = await prisma.user.findMany()

    return users
  }
  
  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    const user = await prisma.user.update({
      where: {
        id
      },
      data
    })

    return user
  }

  async removeUser(id: string) {
    const user = await prisma.user.delete({
      where: {
        id,
      }
    })
    
    return user
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  
}
