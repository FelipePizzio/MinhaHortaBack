import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { IPlantsRepository } from '../interfaces/interface-plants-repository'

export class PlantsRepository implements IPlantsRepository {
  async findById(id: string) {
    const plant = await prisma.plant.findUnique({
      where: {
        id,
      },
    })

    return plant
  }

  async create(data: Prisma.PlantCreateInput) {
    const plant = await prisma.plant.create({
      data,
    })

    return plant
  }
}
