import { makeRegisterTaskService } from "@/services/tasks/factories/make-create-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function registerTask(
  request: FastifyRequest,
  reply: FastifyReply
) {

  const registerTaskBodySchema = z.object({
    name: z.string()
  })

  const { name } = registerTaskBodySchema.parse(request.body)
  const registerTaskService = makeRegisterTaskService()

  await registerTaskService.execute({name})

  return reply.status(201).send()
}