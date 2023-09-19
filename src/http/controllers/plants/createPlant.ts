import { makeCreatePlantService } from '@/services/plants/factories/make-create-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createPlant(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerPlantBodySchema = z.object({
    name: z.string(),
  })

  const { name } = registerPlantBodySchema.parse(request.body)

  const registerPlantService = makeCreatePlantService()

  await registerPlantService.execute({ name })

  return reply.status(201).send()
}
