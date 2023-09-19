import { makeFindByIdPlantationService } from '@/services/plantations/factories/make-find-by-id-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findByIdPlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  
  const getPlantationParamsSchema = z.object({
    plantationId: z.string(),
  })

  const { plantationId } = getPlantationParamsSchema.parse(request.params)
  const getPlantationService = makeFindByIdPlantationService()

  const { plantation } = await getPlantationService.execute({
    plantationId
  })

  return reply.status(200).send({
    plantation,
  })
}
