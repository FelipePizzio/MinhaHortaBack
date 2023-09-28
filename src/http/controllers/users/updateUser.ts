import { makeUpdateUserService } from '@/services/users/factories/make-update-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updateUser(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const updateUserProfileBodySchema = z.object({
    userId: z.string(),
    name: z.string(),
    password: z.string(),
    avatar: z.string(),
  })

  const { userId, name, password, avatar } = updateUserProfileBodySchema.parse(request.body)
  const service = makeUpdateUserService()

  const { user } = await service.execute({userId, name, password, avatar})

  return reply.status(200).send({
    user
  })
}
