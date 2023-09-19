import { makeUpdateTaskService } from "@/services/tasks/factories/make-update-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateTask(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const updateTaskBodySchema = z.object({
    taskId: z.string(),
    name: z.string(),
  })

  const { name, taskId } = updateTaskBodySchema.parse(request.body)
  const updateTaskService = makeUpdateTaskService()

  const { task } = await updateTaskService.execute({ taskId, name })

  return reply.status(200).send({
    task
  })
}