import { makeFindByIdPlantationService } from '@/services/plantations/factories/make-find-by-id-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findByIdPlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  
  const paramsSchema = z.object({
    plantationId: z.string(),
  })

  const { plantationId } = paramsSchema.parse(request.params)
  const service = makeFindByIdPlantationService()

  const { plantation } = await service.execute({
    plantationId
  })

  return reply.status(200).send({
    plantation,
  })
}
