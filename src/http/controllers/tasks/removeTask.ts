import { makeRemoveTaskService } from "@/services/tasks/factories/make-remove-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function removeTask(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const bodySchema = z.object({
    taskId: z.string()
  })

  const { taskId } = bodySchema.parse(request.body)
  const service = makeRemoveTaskService()

  await service.execute({taskId})

  return reply.status(200).send()
}