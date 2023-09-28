import { TasksRepository } from "@/repositories/prisma/tasks-repository";
import { CreateTaskService } from "../create";
import { PlantationsRepository } from "@/repositories/prisma/plantations-repository";
import { UsersRepository } from "@/repositories/prisma/users-repository";

export function makeCreateTaskService() {
  const tasksRepository = new TasksRepository()
  const plantationsRepository = new PlantationsRepository()
  const usersRepository = new UsersRepository()
  const service = new CreateTaskService(tasksRepository, plantationsRepository, usersRepository)

  return service
}