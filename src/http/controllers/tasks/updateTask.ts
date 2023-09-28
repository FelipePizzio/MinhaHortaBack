import { makeUpdateTaskService } from "@/services/tasks/factories/make-update-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateTask(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const bodySchema = z.object({
    taskId: z.string(),
    name: z.string(),
    userId: z.string(),
    plantationId: z.string(),
    completed: z.boolean()
  })

  const { name, taskId, userId, plantationId, completed } = bodySchema.parse(request.body)
  const service = makeUpdateTaskService()

  const { task } = await service.execute({ taskId, name, userId, plantationId, completed })

  return reply.status(200).send({
    task
  })
}