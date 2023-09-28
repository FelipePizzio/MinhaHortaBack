import { makeFindByIdService } from '@/services/users/factories/make-find-by-id-service'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function findByIdUser(request: FastifyRequest, reply: FastifyReply) {
  const service = makeFindByIdService()

  const { user } = await service.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined,
    },
  })
}
