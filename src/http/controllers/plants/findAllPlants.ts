import { makeFindAllPlantsService } from '@/services/plants/factories/make-find-all-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findAllPlants(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    requestedPage: z.string()
  })

  const {
    requestedPage
  } = paramsSchema.parse(request.params)
  
  const service = makeFindAllPlantsService()

  const { plants, totalPages } = await service.execute({ requestedPage })

  return reply.status(200).send({ plants, totalPages })
}
