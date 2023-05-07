import { makeRemovePlantationService } from '@/services/plantations/factories/make-remove-plantation-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function removePlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const registerBodySchema = z.object({
    plantationId: z.string(),
  })

  const { plantationId } = registerBodySchema.parse(request.body)
  const removeService = makeRemovePlantationService()

  await removeService.execute({plantationId})

  return reply.status(200).send()
}
