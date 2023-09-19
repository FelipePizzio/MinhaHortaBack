import { Plant, Prisma } from '@prisma/client'

export interface IPlantsRepository {
  create(data: Prisma.PlantCreateInput): Promise<Plant>
  findAll(): Promise<Plant[] | []>
  updatePlant(id: string, data: Prisma.PlantUpdateInput): Promise<Plant>
  removePlant(id: string): Promise<Plant>

  findById(id: string): Promise<Plant | null>
}
