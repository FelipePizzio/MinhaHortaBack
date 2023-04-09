import { Plant, Prisma } from '@prisma/client'

export interface IPlantsRepository {
  findById(id: string): Promise<Plant | null>
  create(data: Prisma.PlantCreateInput): Promise<Plant>
}
