import { Plant, Prisma } from '@prisma/client'

export interface IPlantsRepository {
  findAll(): Promise<Plant[] | []>
  findById(id: string): Promise<Plant | null>
  create(data: Prisma.PlantCreateInput): Promise<Plant>
}
