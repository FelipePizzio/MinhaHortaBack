import { IPlantationsRepository } from "@/repositories/interfaces/interface-plantations-repository"
import { ITasksRepository } from "@/repositories/interfaces/interface-tasks-repository"
import { Task } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found"

interface ICreateTaskServiceRequest {
  name: string
  plantationId: string
}

interface ICreateTaskServiceResponse {
  task: Task
}

export class CreateTaskService {
  constructor(private tasksRepository: ITasksRepository, private plantationRepository: IPlantationsRepository) {}

  async execute({
    name,
    plantationId
  }: ICreateTaskServiceRequest): Promise<ICreateTaskServiceResponse> {
    const plantation = await this.plantationRepository.findById(plantationId)

    if(!plantation) {
      throw new ResourceNotFoundError()
    }

    const task = await this.tasksRepository.create({
      name,
      plantationId
    })

    return { task }
  }
}