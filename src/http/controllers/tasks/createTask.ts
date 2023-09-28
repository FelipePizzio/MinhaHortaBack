import { makeCreateTaskService } from "@/services/tasks/factories/make-create-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createTask(
  request: FastifyRequest,
  reply: FastifyReply
) {

  const bodySchema = z.object({
    name: z.string(),
    plantationId: z.string(),
    userId: z.string()
  })

  const { name, plantationId, userId } = bodySchema.parse(request.body)
  const service = makeCreateTaskService()

  await service.execute({name, plantationId, userId})

  return reply.status(201).send()
}