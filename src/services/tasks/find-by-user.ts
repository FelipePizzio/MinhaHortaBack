import { ITasksRepository } from "@/repositories/interfaces/interface-tasks-repository"
import { Task } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found"

interface IFindByUserTasksServiceRequest {
  userId: string
}

interface IFindByUserTasksServiceResponse {
  tasks: Task[]
}

export class FindByUserTasksService {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({
    userId,
  }: IFindByUserTasksServiceRequest): Promise<IFindByUserTasksServiceResponse> {
    const tasks = await this.tasksRepository.findByUser(userId)

    if(!tasks) {
      throw new ResourceNotFoundError()
    }

    return { tasks }
  }
}