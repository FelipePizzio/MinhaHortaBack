import { Prisma, Plant } from '@prisma/client'
import { IPlantsRepository } from '../interfaces/interface-plants-repository'

export class InMemoryPlantsRepository implements IPlantsRepository {
  findAll(): Promise<[] | Plant[]> {
    throw new Error('Method not implemented.')
  }

  public items: Plant[] = []

  async findById(id: string) {
    const plant = this.items.find((item) => item.id === id)

    if (!plant) return null

    return plant
  }

  async create(data: Prisma.PlantCreateInput) {
    const plant = {
      id: 'plant-1',
      name: data.name,
    }

    this.items.push(plant)

    return plant
  }
}
