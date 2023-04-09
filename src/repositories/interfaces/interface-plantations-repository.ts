import { Plantation, Prisma } from '@prisma/client'

export interface IPlantationsRepository {
  create(data: Prisma.PlantationCreateInput): Promise<Plantation>
}
