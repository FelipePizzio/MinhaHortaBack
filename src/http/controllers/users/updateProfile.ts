import { makeUpdateUserProfileService } from '@/services/users/factories/make-update-user-profile-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updateProfile(
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
  const updateUserProfileService = makeUpdateUserProfileService()

  const { user } = await updateUserProfileService.execute({userId, name, password, avatar})

  return reply.status(200).send({
    user
  })
}
