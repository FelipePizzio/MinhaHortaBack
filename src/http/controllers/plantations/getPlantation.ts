import { makeGetPlantationByIdService } from '@/services/plantations/factories/make-get-plantation-by-id-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getPlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  
  const getPlantationParamsSchema = z.object({
    plantationId: z.string(),
  })

  const { plantationId } = getPlantationParamsSchema.parse(request.params)
  const getPlantationService = makeGetPlantationByIdService()

  const { plantation } = await getPlantationService.execute({
    plantationId
  })

  return reply.status(200).send({
    plantation,
  })
}
