import { Plantation, Prisma } from '@prisma/client'

export interface IPlantationsRepository {
  removePlantation(id: string): Promise<Plantation>
  updatePlantation(id: string, data: Prisma.PlantationUpdateInput): Promise<Plantation>
  findById(id: string): Promise<Plantation | null>
  findAllByUser(id: string): Promise<Plantation[] | []>
  create(data: Prisma.PlantationCreateInput): Promise<Plantation>
}
