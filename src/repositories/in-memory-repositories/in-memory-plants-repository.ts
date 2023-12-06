import { Prisma, Plant } from '@prisma/client'
import { IPlantsRepository } from '../interfaces/interface-plants-repository'

export class InMemoryPlantsRepository implements IPlantsRepository {
  public items: Plant[] = []
  
  updatePlant(id: string, data: Prisma.PlantUpdateInput): Promise<Plant> {
    throw new Error('Method not implemented.')
  }

  removePlant(id: string): Promise<Plant> {
    throw new Error('Method not implemented.')
  }

  findAll(): Promise<[] | Plant[]> {
    throw new Error('Method not implemented.')
  }

  async findById(id: string) {
    const plant = this.items.find((item) => item.id === id)

    if (!plant) return null

    return plant
  }

  async create(data: Prisma.PlantCreateInput) {
    const plant = {
      id: 'plant-1',
      name: ['plant-1'],
      common_name: 'plant-1',
      scientific_name: 'plant-1',
      synonyms: ['plant-1'],
      image_url: '',
      family_common_name: 'plant-1',
      genus: 'plant-1',
      family: 'plant-1',
      water_frequency: 1,
      tasks: ['Regar'],
    }

    this.items.push(plant)

    return plant
  }
}
