import { makeCreatePlantService } from '@/services/plants/factories/make-create-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createPlant(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = z.object({
    name: z.string(),
  })

  const { name } = bodySchema.parse(request.body)

  const service = makeCreatePlantService()

  await service.execute({ name })

  return reply.status(201).send()
}
