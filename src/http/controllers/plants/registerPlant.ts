import { makeRegisterPlantService } from '@/services/plants/factories/make-register-plant-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerPlant(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerPlantBodySchema = z.object({
    name: z.string(),
  })

  const { name } = registerPlantBodySchema.parse(request.body)

  const registerPlantService = makeRegisterPlantService()

  await registerPlantService.execute({ name })

  return reply.status(201).send()
}
