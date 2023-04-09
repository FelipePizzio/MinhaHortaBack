import { Plantation, Prisma } from '@prisma/client'
import { IPlantationsRepository } from '../interfaces/interface-plantations-repository'

export class InMemoryPlantationsRepository implements IPlantationsRepository {
  public items: Plantation[] = []

  async create(data: Prisma.PlantationCreateInput) {
    const plantation = {
      id: 'plantation-1',
      name: data.name,
      plantId: data.plantId,
      userId: data.userId,
    }

    this.items.push(plantation)

    return plantation
  }
}
