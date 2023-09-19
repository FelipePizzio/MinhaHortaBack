import { Prisma, Task } from "@prisma/client";

export interface ITasksRepository {
  create(data: Prisma.TaskCreateInput): Promise<Task>
  findAll(): Promise<Task[] | []>
  updateTask(id: string, data: Prisma.TaskUpdateInput): Promise<Task>
  removeTask(id: string): Promise<Task>
}