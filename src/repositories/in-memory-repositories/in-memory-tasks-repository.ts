import { Prisma, Task } from '@prisma/client'
import { ITasksRepository } from '../interfaces/interface-tasks-repository'

export class InMemoryTasksRepository implements ITasksRepository {
  public items: Task[] = []

  async create(data: Prisma.TaskCreateInput) {
    const task = {
      id: 'task-1',
      name: 'Regar',
      plantationId: data.plantationId,
      userId: data.userId,
      completed: false,
      created_at: new Date(),
    }

    this.items.push(task)

    return task
  }

  findAll(): Promise<[] | Task[]> {
    throw new Error('Method not implemented.')
  }
  updateTask(id: string, data: Prisma.TaskUpdateInput): Promise<Task> {
    throw new Error('Method not implemented.')
  }
  removeTask(id: string): Promise<Task> {
    throw new Error('Method not implemented.')
  }
  findByUser(id: string): Promise<[] | Task[]> {
    throw new Error('Method not implemented.')
  }
}
