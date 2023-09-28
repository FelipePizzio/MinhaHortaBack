import { makeCreatePlantationService } from '@/services/plantations/factories/make-create-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createPlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const bodySchema = z.object({
    name: z.string(),
    plantId: z.string(),
    userId: z.string(),
  })

  const { name, plantId } = bodySchema.parse(request.body)
  const service = makeCreatePlantationService()

  await service.execute({ name, plantId, userId: request.user.sub })

  return reply.status(201).send()
}
