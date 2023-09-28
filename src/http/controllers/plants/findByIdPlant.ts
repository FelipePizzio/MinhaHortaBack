
import { makeFindByIdPlantService } from '@/services/plants/factories/make-find-by-id-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findByIdPlant(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const paramsSchema = z.object({
    plantId: z.string()
  })

  const { plantId } = paramsSchema.parse(request.params)
  const service = makeFindByIdPlantService()

  const { plant } = await service.execute({
    plantId
  })

  return reply.status(200).send({
    plant
  })
}
 