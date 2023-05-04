import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { IPlantationsRepository } from '../interfaces/interface-plantations-repository'

export class PlantationsRepository implements IPlantationsRepository {
  async findAllByUser(id: string) {
    const plantations = await prisma.plantation.findMany({
      where: {
        userId: id,
      },
    })

    return plantations
  }

  async create(data: Prisma.PlantationCreateInput) {
    const plantation = await prisma.plantation.create({
      data,
    })

    return plantation
  }
}
