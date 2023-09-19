import { ITasksRepository } from "@/repositories/interfaces/interface-tasks-repository"
import { Task } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found"

interface IUpdateTaskServiceRequest {
  taskId: string
  name: string
  plantationId: string
}

interface IUpdateTaskServiceResponse {
  task: Task
}

export class UpdateTaskService {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({
    taskId,
    name,
    plantationId
  }: IUpdateTaskServiceRequest): Promise<IUpdateTaskServiceResponse> {
    const task = await this.tasksRepository.updateTask(taskId, {name, plantationId})

    if(!task) {
      throw new ResourceNotFoundError()
    }

    return { task }
  }
}