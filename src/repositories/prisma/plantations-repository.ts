import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { IPlantationsRepository } from '../interfaces/interface-plantations-repository'

export class PlantationsRepository implements IPlantationsRepository {
  async create(data: Prisma.PlantationCreateInput) {
    const plantation = await prisma.plantation.create({
      data,
    })

    return plantation
  }
}
