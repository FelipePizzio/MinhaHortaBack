import { makeRemovePlantationService } from '@/services/plantations/factories/make-remove-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function removePlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const bodySchema = z.object({
    plantationId: z.string(),
  })

  const { plantationId } = bodySchema.parse(request.body)
  const service = makeRemovePlantationService()

  await service.execute({plantationId})

  return reply.status(200).send()
}
