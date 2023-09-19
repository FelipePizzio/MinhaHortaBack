import { ITasksRepository } from "@/repositories/interfaces/interface-tasks-repository"
import { Task } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found"

interface IRemoveTaskServiceRequest {
  taskId: string
}

interface IRemoveTaskServiceResponse {
  task: Task
}

export class RemoveTaskService {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({
    taskId
  }: IRemoveTaskServiceRequest): Promise<IRemoveTaskServiceResponse> {
    const task = await this.tasksRepository.removeTask(taskId)

    if(!task) {
      throw new ResourceNotFoundError()
    }

    return { task }
  }

}