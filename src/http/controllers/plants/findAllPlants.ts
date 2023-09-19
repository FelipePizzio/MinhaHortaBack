import { makeFindAllPlantsService } from '@/services/plants/factories/make-find-all-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findAllPlants(request: FastifyRequest, reply: FastifyReply) {
  const getListPlants = makeFindAllPlantsService()

  const { plants } = await getListPlants.execute({})

  return reply.status(200).send({ plants })
}
