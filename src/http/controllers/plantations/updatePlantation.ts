import { makeUpdatePlantationService } from '@/services/plantations/factories/make-update-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updatePlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const bodySchema = z.object({
    plantationId: z.string(),
    name: z.string(),
    plantId: z.string(),
    image: z.string(),
  })

  const { name, plantId, plantationId, image } = bodySchema.parse(request.body)
  const service = makeUpdatePlantationService()

  const { plantation } = await service.execute({ plantationId, name, plantId, image })

  return reply.status(200).send({
    plantation
  })
}
