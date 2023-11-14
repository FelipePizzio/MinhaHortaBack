import { PlantationsRepository } from '@/repositories/prisma/plantations-repository'
import { CreatePlantationService } from '../create'
import { UsersRepository } from '@/repositories/prisma/users-repository'
import { PlantsRepository } from '@/repositories/prisma/plants-repository'
import { TasksRepository } from '@/repositories/prisma/tasks-repository'

export function makeCreatePlantationService() {
  const plantationsRepository = new PlantationsRepository()
  const usersRepository = new UsersRepository()
  const plantsRepository = new PlantsRepository()
  const tasksRepository = new TasksRepository()
  const service = new CreatePlantationService(
    plantationsRepository,
    usersRepository,
    plantsRepository,
    tasksRepository,
  )

  return service
}
