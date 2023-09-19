
import { makeFindByIdPlantService } from '@/services/plants/factories/make-find-by-id-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findByIdPlant(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const getPlantParamsSchema = z.object({
    plantId: z.string()
  })

  const { plantId } = getPlantParamsSchema.parse(request.params)
  const getPlantService = makeFindByIdPlantService()

  const { plant } = await getPlantService.execute({
    plantId
  })

  return reply.status(200).send({
    plant
  })
}
 