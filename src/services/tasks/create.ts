import { IPlantationsRepository } from "@/repositories/interfaces/interface-plantations-repository"
import { ITasksRepository } from "@/repositories/interfaces/interface-tasks-repository"
import { Task } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found"
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository"

interface ICreateTaskServiceRequest {
  name: string
  userId: string
  plantationId: string
  created_at: Date
}

interface ICreateTaskServiceResponse {
  task: Task
}

export class CreateTaskService {
  constructor(
    private tasksRepository: ITasksRepository, 
    private plantationRepository: IPlantationsRepository, 
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    userId,
    plantationId,
    created_at
  }: ICreateTaskServiceRequest): Promise<ICreateTaskServiceResponse> {
    const plantation = await this.plantationRepository.findById(plantationId)
    const user = await this.usersRepository.findById(userId)

    if(!plantation || !user) {
      throw new ResourceNotFoundError()
    }

    const task = await this.tasksRepository.create({
      name,
      userId,
      plantationId,
      created_at,
    })

    return { task }
  }
}