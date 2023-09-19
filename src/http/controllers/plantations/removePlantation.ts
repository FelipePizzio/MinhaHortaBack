import { makeRemovePlantationService } from '@/services/plantations/factories/make-remove-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function removePlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const removePlantationBodySchema = z.object({
    plantationId: z.string(),
  })

  const { plantationId } = removePlantationBodySchema.parse(request.body)
  const removePlantationService = makeRemovePlantationService()

  await removePlantationService.execute({plantationId})

  return reply.status(200).send()
}
