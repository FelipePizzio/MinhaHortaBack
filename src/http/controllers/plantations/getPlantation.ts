import { makeGetPlantationByIdService } from '@/services/plantations/factories/make-get-plantation-by-id-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getPlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  
  const registerBodySchema = z.object({
    plantationId: z.string(),
  })

  const { plantationId } = registerBodySchema.parse(request.params)
  const getPlantation = makeGetPlantationByIdService()

  const { plantation } = await getPlantation.execute({
    plantationId
  })

  return reply.status(200).send({
    plantation,
  })
}
