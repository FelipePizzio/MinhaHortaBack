import { TasksRepository } from "@/repositories/prisma/tasks-repository"
import { UpdateTaskService } from "../update"

export function makeUpdateTaskService() {
  const tasksRepository = new TasksRepository()
  const service = new UpdateTaskService(tasksRepository)

  return service
}