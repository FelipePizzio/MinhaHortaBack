import { makeRegisterPlantationService } from '@/services/plantations/factories/make-register-plantation-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerPlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const registerBodySchema = z.object({
    name: z.string(),
    plantId: z.string(),
    userId: z.string(),
  })

  const { name, plantId } = registerBodySchema.parse(request.body)
  const registerService = makeRegisterPlantationService()

  await registerService.execute({ name, plantId, userId: request.user.sub })

  return reply.status(201).send()
}
