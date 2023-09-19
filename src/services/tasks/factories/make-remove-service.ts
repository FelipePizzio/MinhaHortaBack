import { TasksRepository } from "@/repositories/prisma/tasks-repository"
import { RemoveTaskService } from "../remove"

export function makeRemoveTaskService() {
  const tasksRepository = new TasksRepository()
  const service = new RemoveTaskService(tasksRepository)

  return service
}