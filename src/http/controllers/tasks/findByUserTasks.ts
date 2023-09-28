import { makeFindByUserTasksService } from "@/services/tasks/factories/make-find-by-user";
import { FastifyReply, FastifyRequest } from "fastify";

export async function findByUserTasks(
  request: FastifyRequest,
  reply: FastifyReply
) {

  const service = makeFindByUserTasksService()

  const { tasks } = await service.execute({
     userId: request.user.sub,
  })

  return reply.status(200).send({
    tasks,
  })
}