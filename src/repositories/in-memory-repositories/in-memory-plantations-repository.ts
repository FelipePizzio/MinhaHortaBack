import { Plantation, Prisma } from '@prisma/client'
import { IPlantationsRepository } from '../interfaces/interface-plantations-repository'

export class InMemoryPlantationsRepository implements IPlantationsRepository {
  findAll(): Promise<[] | Plantation[]> {
    throw new Error('Method not implemented.')
  }
  findByUser(id: string): Promise<[] | Plantation[]> {
    throw new Error('Method not implemented.')
  }
  removePlantation(id: string): Promise<Plantation> {
    throw new Error('Method not implemented.')
  }
  updatePlantation(id: string, data: Prisma.PlantationUpdateInput): Promise<Plantation> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<Plantation | null> {
    throw new Error('Method not implemented.')
  }
  findAllByUser(id: string): Promise<Plantation[] | []> {
    throw new Error('Method not implemented.')
  }
  public items: Plantation[] = []

  async create(data: Prisma.PlantationCreateInput) {
    const plantation = {
      id: 'plantation-1',
      name: data.name,
      created_at: new Date(),
      image: '',
      plantId: data.plantId,
      userId: data.userId,
    }

    this.items.push(plantation)

    return plantation
  }
}
