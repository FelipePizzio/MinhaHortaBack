import { makeRegisterPlantationService } from '@/services/plantations/factories/make-register-plantation-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerPlantation(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const registerPlantationBodySchema = z.object({
    name: z.string(),
    plantId: z.string(),
    userId: z.string(),
  })

  const { name, plantId } = registerPlantationBodySchema.parse(request.body)
  const registerPlantationService = makeRegisterPlantationService()

  await registerPlantationService.execute({ name, plantId, userId: request.user.sub })

  return reply.status(201).send()
}
