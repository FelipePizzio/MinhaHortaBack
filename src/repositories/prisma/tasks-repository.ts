import { Task, Prisma } from "@prisma/client";
import { ITasksRepository } from "../interfaces/interface-tasks-repository";
import { prisma } from "@/lib/prisma";

export class TasksRepository implements ITasksRepository {

  async create(data: Prisma.TaskCreateInput) {
    const task = await prisma.task.create({
      data,
    })

    return task
  }

  async findAll() {
    const tasks = await prisma.task.findMany()

    return tasks
  }

  async updateTask(id: string, data: Prisma.TaskUpdateInput) {
    const task = await prisma.task.update({
      where: {
        id
      },
      data
    })

    return task
  }
  
  async removeTask(id: string) {
    const task = await prisma.task.delete({
      where: {
        id,
      }
    })
    
    return task
  }
}