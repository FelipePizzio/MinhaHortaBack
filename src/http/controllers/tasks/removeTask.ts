import { makeRemoveTaskService } from "@/services/tasks/factories/make-remove-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function removeTask(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const removeTaskBodySchema = z.object({
    taskId: z.string()
  })

  const { taskId } = removeTaskBodySchema.parse(request.body)
  const removeTaskService = makeRemoveTaskService()

  await removeTaskService.execute({taskId})

  return reply.status(200).send()
}