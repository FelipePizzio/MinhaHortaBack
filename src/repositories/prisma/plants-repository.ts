import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { IPlantsRepository } from '../interfaces/interface-plants-repository'

export class PlantsRepository implements IPlantsRepository {

  async create(data: Prisma.PlantCreateInput) {
    const plant = await prisma.plant.create({
      data,
    })

    return plant
  }

  async findAll() {
    const plants = await prisma.plant.findMany()

    return plants
  }
  
  async updatePlant(id: string, data: Prisma.PlantUpdateInput) {
    const plant = await prisma.plant.update({
      where: {
        id
      },
      data
    })

    return plant
  }
  async removePlant(id: string) {
    const plant = await prisma.plant.delete({
      where: {
        id
      }
    })
    
    return plant
  }

  async findById(id: string) {
    const plant = await prisma.plant.findUnique({
      where: {
        id,
      },
    })

    return plant
  }

  
}
