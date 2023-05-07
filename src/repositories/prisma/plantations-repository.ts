import { prisma } from '@/lib/prisma'
import { Plantation, Prisma } from '@prisma/client'
import { IPlantationsRepository } from '../interfaces/interface-plantations-repository'

export class PlantationsRepository implements IPlantationsRepository {
  async removePlantation(id: string) {
    const plantation = await prisma.plantation.delete({
      where: {
        id
      }
    })
    return plantation
  }
  
  async updatePlantation(id: string, data: Prisma.PlantationUpdateInput) {
    const plantation = await prisma.plantation.update({
      where: {
        id
      },
      data
    })

    return plantation
  }
  
  async findById(id: string) {
    const plantation = await prisma.plantation.findUnique({
      where: {
        id
      }
    })

    return plantation
  }
  
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
