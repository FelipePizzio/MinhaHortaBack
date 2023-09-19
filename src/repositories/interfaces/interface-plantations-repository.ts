import { Plantation, Prisma } from '@prisma/client'

export interface IPlantationsRepository {
  create(data: Prisma.PlantationCreateInput): Promise<Plantation>
  findAll(): Promise<Plantation[] | []>
  updatePlantation(id: string, data: Prisma.PlantationUpdateInput): Promise<Plantation>
  removePlantation(id: string): Promise<Plantation>

  findById(id: string): Promise<Plantation | null>
  findByUser(id: string): Promise<Plantation[] | []>
}
