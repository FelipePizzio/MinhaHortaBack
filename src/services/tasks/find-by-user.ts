import { ITasksRepository } from "@/repositories/interfaces/interface-tasks-repository"
import { Task } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found"
import moment from "moment"

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
    const t = await this.tasksRepository.findByUser(userId)
    const date = moment().format('DD/MM/YY')

    const tasks = t.filter(task => {
      const d = moment(task.created_at).format('DD/MM/YY')
      return d === date
    })

    if(!tasks) {
      throw new ResourceNotFoundError()
    }

    return { tasks }
  }
}