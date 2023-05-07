import { makeUpdatePlantationService } from '@/services/plantations/factories/make-update-plantation'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updatePlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const registerBodySchema = z.object({
    plantationId: z.string(),
    name: z.string(),
    plantId: z.string(),
    image: z.string(),
  })

  const { name, plantId, plantationId, image } = registerBodySchema.parse(request.body)
  const registerService = makeUpdatePlantationService()

  const { plantation } = await registerService.execute({ plantationId, name, plantId, image })

  return reply.status(200).send({
    plantation
  })
}
