import { makeFindAllTasksService } from "@/services/tasks/factories/make-find-all-service";
import { FastifyReply, FastifyRequest } from "fastify";

export async function findAllTasks(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  
  const service = makeFindAllTasksService() 

  const { tasks } = await service.execute({})

  return reply.status(200).send({ tasks })
}