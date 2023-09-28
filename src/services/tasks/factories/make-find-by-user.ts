import { TasksRepository } from "@/repositories/prisma/tasks-repository";
import { FindByUserTasksService } from "../find-by-user";

export function makeFindByUserTasksService() {
  const tasksRepository = new TasksRepository()
  const service = new FindByUserTasksService(tasksRepository)

  return service
}