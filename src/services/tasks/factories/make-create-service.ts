import { TasksRepository } from "@/repositories/prisma/tasks-repository";
import { CreateTaskService } from "../create";
import { PlantationsRepository } from "@/repositories/prisma/plantations-repository";

export function makeCreateTaskService() {
  const tasksRepository = new TasksRepository()
  const plantationsRepository = new PlantationsRepository()
  const service = new CreateTaskService(tasksRepository, plantationsRepository)

  return service
}