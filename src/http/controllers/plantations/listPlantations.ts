import { makeGetAllPlantationsService } from '@/services/plantations/factories/make-get-all-plantations-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listPlantations(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const getListPlantationsService = makeGetAllPlantationsService()

  const { plantations } = await getListPlantationsService.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    plantations,
  })
}
