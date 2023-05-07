import { makeRegisterService } from '@/services/plants/factories/make-register-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerPlant(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
  })

  const { name } = registerBodySchema.parse(request.body)

  const registerService = makeRegisterService()

  await registerService.execute({ name })

  return reply.status(201).send()
}
