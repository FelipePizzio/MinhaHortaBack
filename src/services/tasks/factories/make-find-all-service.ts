import { TasksRepository } from "@/repositories/prisma/tasks-repository"
import { FindAllTasksService } from "../find-all"

export function makeFindAllTasksService() {
  const tasksRepository = new TasksRepository()
  const service = new FindAllTasksService(tasksRepository)

  return service
}