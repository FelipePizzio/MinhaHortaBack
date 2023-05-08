import { makeGetPlantByIdService } from '@/services/plants/factories/make-get-plant-by-id-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getPlant(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const getPlantParamsSchema = z.object({
    plantId: z.string()
  })

  const { plantId } = getPlantParamsSchema.parse(request.params)
  const getPlantService = makeGetPlantByIdService()

  const { plant } = await getPlantService.execute({
    plantId
  })

  return reply.status(200).send({
    plant
  })
}
 