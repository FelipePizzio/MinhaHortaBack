import { makeGetAllPlantsService } from '@/services/plants/factories/make-get-all-plants'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listPlants(request: FastifyRequest, reply: FastifyReply) {
  const getListPlants = makeGetAllPlantsService()

  const { plants } = await getListPlants.execute({})

  return reply.status(200).send({ plants })
}
