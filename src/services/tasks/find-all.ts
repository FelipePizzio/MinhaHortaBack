import { ITasksRepository } from "@/repositories/interfaces/interface-tasks-repository";
import { Task } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found";

interface IFindAllTasksServiceRequest {}

interface IFindAllTasksServiceResponse {
  tasks: Task[]
}

export class FindAllTasksService {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({}: IFindAllTasksServiceRequest): Promise<IFindAllTasksServiceResponse> {
    const tasks = await this.tasksRepository.findAll()

    if(!tasks) {
      throw new ResourceNotFoundError()
    }

    return { tasks }
  }
}