import { makeFindByUserPlantationsService } from '@/services/plantations/factories/make-find-by-user-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findByUserPlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const service = makeFindByUserPlantationsService()

  const { plantations } = await service.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    plantations,
  })
}
