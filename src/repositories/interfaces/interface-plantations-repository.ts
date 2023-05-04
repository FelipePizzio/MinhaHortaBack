import { Plantation, Prisma } from '@prisma/client'

export interface IPlantationsRepository {
  findAllByUser(id: string): Promise<Plantation[] | []>
  create(data: Prisma.PlantationCreateInput): Promise<Plantation>
}
