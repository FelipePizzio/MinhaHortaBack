import { makeUpdatePlantationService } from '@/services/plantations/factories/make-update-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updatePlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const updatePlantationBodySchema = z.object({
    plantationId: z.string(),
    name: z.string(),
    plantId: z.string(),
    image: z.string(),
  })

  const { name, plantId, plantationId, image } = updatePlantationBodySchema.parse(request.body)
  const updatePlantationService = makeUpdatePlantationService()

  const { plantation } = await updatePlantationService.execute({ plantationId, name, plantId, image })

  return reply.status(200).send({
    plantation
  })
}
