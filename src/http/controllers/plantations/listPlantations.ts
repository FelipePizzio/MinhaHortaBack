import { makeGetAllPlantationsService } from '@/services/plantations/factories/make-get-all-plantations'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listPlantations(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getListPlantations = makeGetAllPlantationsService()

  const { plantations } = await getListPlantations.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    plantations,
  })
}
